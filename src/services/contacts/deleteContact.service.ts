import Contact from "../../entities/contact.entity";
import { AppDataSource } from "./../../data-source";

const deleteContactService = async (id: string): Promise<string> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: id });

  await contactRepository.remove(contact);

  return "Contact deleted";
};

export { deleteContactService };
