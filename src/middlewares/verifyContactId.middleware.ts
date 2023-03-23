import { AppDataSource } from "./../data-source";
import { NextFunction, Request, Response } from "express";
import Contact from "../entities/contact.entity";
import { AppError } from "../errors";

const verifyContactIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: req.params.id });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.user.id != req.user.id){
    throw new AppError("You are not allowed do to this", 401);
  }

  return next();
};

export { verifyContactIdMiddleware };
