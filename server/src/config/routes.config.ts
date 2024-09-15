import { Express } from "express";
import { DashboardRoute, ProductRoute } from "../routes";

export const configureRoutes = (app: Express) => {
  app.use("/dashboard", DashboardRoute);
  app.use("/products", ProductRoute);
};
