import { Router } from "express";
import { loginUserController } from "../controllers/users/user.controller";

const loginRouter = Router();

loginRouter.post("", loginUserController);

export { loginRouter };
