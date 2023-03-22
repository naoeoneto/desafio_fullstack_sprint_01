import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  readUserController,
  updateUserController,
} from "../controllers/users/user.controller";

const userRouter = Router();

userRouter.post("", createUserController);

userRouter.get("", readUserController);

userRouter.get("/:id", listUsersController);

userRouter.patch("/:id", updateUserController);

userRouter.delete("/:id", deleteUserController);

export { userRouter };
