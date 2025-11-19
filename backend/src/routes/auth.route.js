import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  updateProfileController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.put("/update-profile", authMiddleware, updateProfileController);

export default router;
