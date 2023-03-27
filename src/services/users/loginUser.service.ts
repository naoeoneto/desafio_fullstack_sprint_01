import { AppError } from "./../../errors";
import { compare } from "bcryptjs";
import User from "../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import { IUserLogin, IUserLoginResponse } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { userResponseSchema } from "../../schemas/users/schemaUser";

const loginUserService = async ({ email, password }: IUserLogin): Promise<IUserLoginResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) {
    throw new AppError("Password or email incorrect", 403);
  }

  const token = jwt.sign(
    { isActive: user.isActive },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  const returnedUser = await userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return {returnedUser, token};
};

export { loginUserService };
