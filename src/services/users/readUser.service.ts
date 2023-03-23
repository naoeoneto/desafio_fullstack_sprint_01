import User from "../../entities/user.entity";
import { userResponseSchema } from "../../schemas/users/schemaUser";
import { AppDataSource } from "./../../data-source";
import { IUser } from "../../interfaces/users";

const readUserService = async (id: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  const returnedUser = await userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return returnedUser;
};

export { readUserService };
