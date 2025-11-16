import express from "express";
import { signupController } from "../controllers/signup.controller.js";

const router = express.Router();

router.get("/signup", signupController);
router.get("/login", (req, res) => {
  res.send("Login Endpoint");
});
router.get("/logout", (req, res) => {
  res.send("Logout Endpoint");
});

export default router;
