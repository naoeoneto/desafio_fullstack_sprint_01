import Contact from "../../entities/contact.entity";
import { contactResponseSchema } from "../../schemas/contacts/schemaContact";
import { AppDataSource } from "./../../data-source";
import { IContact, IContactUpdate } from "./../../interfaces/contacts/index";

const updateContactService = async (
  data: IContactUpdate,
  id: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: id });

  const updatedContact = contactRepository.create({
    ...contact,
    ...data,
  });
  await contactRepository.save(updatedContact);

  const returnedContact = await contactResponseSchema.validate(updatedContact, {
    stripUnknown: true,
  });
  return returnedContact;
};

export { updateContactService };
