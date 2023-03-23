import { AppError } from "./../../errors";
import { compare } from "bcryptjs";
import User from "../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) {
    throw new AppError("Password or email incorrect", 403);
  }

  const tokenUser = jwt.sign(
    { isActive: user.isActive },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return tokenUser;
};

export { loginUserService };
