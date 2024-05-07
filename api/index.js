import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
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
//to have json body from api request
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
// 
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute);