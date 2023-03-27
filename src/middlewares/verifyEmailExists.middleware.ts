import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../errors";

const verifyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.findOneBy({ email: req.body.email });

  if (user) {
    throw new AppError("Email already exists", 400);
  }

  return next();
};

export { verifyEmailExistsMiddleware };
