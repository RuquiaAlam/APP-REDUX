import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to db!");
  })
  .catch((err) => {
    console.log("error connecting to db!" + err);
  });
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
