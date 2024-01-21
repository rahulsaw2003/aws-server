import express from 'express';
import cors from "cors";
import {config} from "dotenv";

config({path: "./.env"});
import connectDB from './database/connection.js';
import userRouter from "./router/userRoutes.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
connectDB();

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
	res.send("Welcome to the AWS Test Server");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});



