// package import
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import fileUpload from 'express-fileupload';

// function import
import { sequelize } from "./database/db.js"

// routes import 
import blogRoute from "./routes/blog.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import categoryRoute from "./routes/category.js"
import projectRoute from "./routes/project.js"
import taskCategoryRoute from "./routes/taskCategory.js"
import taskRoute from "./routes/task.js"
const app = express()

// middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(fileUpload());
dotenv.config()
app.use(express.json());
app.use(cookieParser())

// CORS options
app.use(cors({
    origin: ['http://localhost:5173', 'https://admin-aelita.vercel.app'],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}));


// Routes
app.use("/api/blogs", blogRoute)
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/projects", projectRoute)
app.use("/api/task-category", taskCategoryRoute)
app.use("/api/task", taskRoute)


app.use("/", (req, res) => {
    res.send("server is running")
})


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
            // { alter: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()