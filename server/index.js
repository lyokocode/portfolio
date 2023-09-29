import express from "express"
import dotenv from "dotenv"
import { sequelize } from "./database/db.js"
import blogRoute from "./routes/blog.js"

const app = express()

// middlewares
dotenv.config()
app.use(express.json());


// Routes
app.use("/api/blogs", blogRoute)

async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()