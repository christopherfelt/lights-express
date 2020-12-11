import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import router from "./routes/api/lights.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/lights", router);

let db = process.env.DB;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
