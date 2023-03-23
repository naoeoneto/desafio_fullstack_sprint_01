import User from "../../entities/user.entity";
import { AppDataSource } from "./../../data-source";

const deleteUserService = async (id: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  await userRepository.softRemove(user!);
  await userRepository.save({
    ...user,
    isActive: false,
  });

  return "User deleted";
};

export { deleteUserService };
