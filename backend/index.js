import express from "express";
import dotenv from "dotenv";
import dbConnection from "./src/utils/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./src/routes/userRoute.js";

dbConnection();

// dotenv.config({
//    path: ".env",
// });

// the code above can be written as
dotenv.config();

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
//http://localhost:8000/api/v1/user/
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
