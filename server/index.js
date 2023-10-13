import express from "express"
import dotenv from "dotenv"
import { sequelize } from "./database/db.js"
import blogRoute from "./routes/blog.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import fileUpload from 'express-fileupload';

const app = express()
// middlewares
app.use(fileUpload());
dotenv.config()
app.use(express.json());
app.use(cookieParser())
app.use(cors())

// Routes
app.use("/api/blogs", blogRoute)
app.use("/api/auth", authRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

async function main() {
    try {
        await sequelize.sync(
            { force: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()