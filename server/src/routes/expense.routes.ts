import { Router } from "express";
import { ExpenseController } from "../controllers";

const expenseController = new ExpenseController();

const router = Router();
router.get("/", expenseController.getExpensesByCategory);

export default router;
