import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  readUserController,
  updateUserController,
} from "../controllers/users/user.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { userSchema, userUpdateSchema } from "../schemas/users/schemaUser";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware";
import { verifyEmailExistsMiddleware } from "../middlewares/verifyEmailExists.middleware";

const userRouter = Router();

userRouter.post("", validateDataMiddleware(userSchema), verifyEmailExistsMiddleware, createUserController);

userRouter.get("", verifyAuthMiddleware, listUsersController);

userRouter.get(
  "/:id",
  verifyAuthMiddleware,
  verifyIdMiddleware,
  readUserController
);

userRouter.patch(
  "",
  verifyAuthMiddleware,
  validateDataMiddleware(userUpdateSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyIdMiddleware,
  deleteUserController
);

export { userRouter };
