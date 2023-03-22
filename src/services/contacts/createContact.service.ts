import { AppDataSource } from "./../../data-source";
import { IContact } from "./../../interfaces/contacts/index";
import { IContactRequest } from "../../interfaces/contacts";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { contactResponseSchema } from "../../schemas/contacts/schemaContact";

const createContactService = async (
  data: IContactRequest,
  userId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  const contact = contactRepository.create({ ...data, user: user! });
  await contactRepository.save(contact);

  const newContact = await contactResponseSchema.validate(contact, {
    stripUnknown: true,
  });
  return newContact;
};

export { createContactService };
