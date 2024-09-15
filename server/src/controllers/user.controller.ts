import { Request, Response } from "express";
import prisma from "../../prisma";

export class UserController {
  constructor() {}

  getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await prisma.users.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users" });
    }
  };
}
