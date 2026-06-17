import express from "express";
import { AuthController } from "../controllers/auth-controller.js";

const router = express.Router();

const controller = new AuthController();

router.post("/register", (req, res) => controller.register(req, res));
router.post("/login", (req, res) => controller.login(req, res));

export default router;
