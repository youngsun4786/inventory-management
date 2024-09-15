import { Router } from "express";
import { UserController } from "../controllers";

const userController = new UserController();

const router = Router();
router.get("/", userController.getUsers);

export default router;
