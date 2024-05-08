import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";
const router = express.Router();

// router.get("/auth",(req,res)=>
// {
//     res.json({
//         message:"auth route"
//     })
// })
router.post("/signup", signup);
router.post("/signin", signin);
export default router;
