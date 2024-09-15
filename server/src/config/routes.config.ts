import { Express } from "express";
import { DashboardRoute, ProductRoute, UserRoute } from "../routes";

export const configureRoutes = (app: Express) => {
  app.use("/dashboard", DashboardRoute);
  app.use("/products", ProductRoute);
  app.use("/users", UserRoute);
};
