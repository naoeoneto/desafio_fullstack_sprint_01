import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IContact } from "../../interfaces/contacts";
import { contactListSchema } from "../../schemas/contacts/schemaContact";

const readContactsByUserService = async (id: string): Promise<IContact[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find({
    where: { id: id },
    relations: { contacts: true },
  });

  const allContacts = await contactListSchema.validate(user[0].contacts, {
    stripUnknown: true,
  });

  return allContacts;
};

export { readContactsByUserService };
