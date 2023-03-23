import User from "../../entities/user.entity";
import { userListSchema } from "../../schemas/users/schemaUser";
import { AppDataSource } from "./../../data-source";
import { IUser } from "../../interfaces/users";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const usersList = await userListSchema.validate(users, {
    stripUnknown: true,
  });

  return usersList;
};

export { listUsersService };
