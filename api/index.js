import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
//import path from "path"
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to db")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())

//const __dirname = path.resolve();

///*app.use(express.static(path.join(__dirname, '/client/dist')));

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });*/

app.use(cookieParser())

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

//middeware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;//if error happens on server side wejust put here 500 server error
    const message = err.message || "Internal Server Error"//if there is no massage we just show our message
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})