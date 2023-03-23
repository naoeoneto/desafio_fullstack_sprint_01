import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors";

const validateDataMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true
      })

      req.body = validated

      return next()
      
  } catch (error: any) {
      console.log(error)
      // return res.status(400).json({ error: error.errors })
      throw new AppError("Invalid data", 409);
  }

    // if (verifyUserExist) {
    //   throw new AppError("Existing user", 409);
    // }

    // next();
  };

export { validateDataMiddleware };
