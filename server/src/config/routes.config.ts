import { Express } from "express";
import { DashboardRoute } from "../routes";

export const configureRoutes = (app: Express) => {
  app.use("/dashboard", DashboardRoute);
};
