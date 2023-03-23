import User from "../../entities/user.entity";
import { userResponseSchema } from "../../schemas/users/schemaUser";
import { AppDataSource } from "./../../data-source";
import { IUser, IUserRequest } from "../../interfaces/users";

const createUserService = async (data: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create(data);

  await userRepository.save(newUser);

  const returnedUser = await userResponseSchema.validate(newUser, {
    stripUnknown: true,
  });

  return returnedUser;
};

export { createUserService };
