import User from "../../entities/user.entity";
import { AppDataSource } from "./../../data-source";

const deleteUserService = async (id: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  await userRepository.remove(user);

  return "User deleted";
};

export { deleteUserService };
