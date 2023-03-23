import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../entities/user.entity";
import { AppError } from "../errors";

const verifyIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: req.params.id });
  
  if (!user) {
    throw new AppError("Id not found", 404);
  }
  
  if (req.params.id != req.user.id) {
    throw new AppError("You are not allowed do to this", 401);
  }

  return next();
};

export { verifyIdMiddleware };
