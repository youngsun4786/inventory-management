import { Router } from "express";
import { DashboardController } from "../controllers";

const dashboardController = new DashboardController();

const router = Router();
router.get("/", dashboardController.getDashboardMetrics);

export default router;
