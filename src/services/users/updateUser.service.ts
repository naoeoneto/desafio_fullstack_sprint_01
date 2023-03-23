import { AppDataSource } from "./../../data-source";
import { IUserUpdate } from "../../interfaces/users";
import { IUser } from "../../interfaces/users";
import User from "../../entities/user.entity";
import { userResponseSchema } from "../../schemas/users/schemaUser";

const updateUserService = async (
  data: IUserUpdate,
  id: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  
  const updatedUser = userRepository.create({
    ...user,
    ...data,
  });
  await userRepository.save(updatedUser);

  const returnedUser = await userResponseSchema.validate(updatedUser, {
    stripUnknown: true,
  });

  return returnedUser;
};

export { updateUserService };
