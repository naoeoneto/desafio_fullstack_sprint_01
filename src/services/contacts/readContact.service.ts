import { AppDataSource } from "./../../data-source";
import { IContact } from "../../interfaces/contacts";
import Contact from "../../entities/contact.entity";
import { contactResponseSchema } from "../../schemas/contacts/schemaContact";

const readContactService = async (id: string): Promise<IContact> => {
  console.log("oi")
  const contactsRepository = AppDataSource.getRepository(Contact);
  const contact = await contactsRepository.findOneBy({ id: id });

  const myProduct = await contactResponseSchema.validate(contact, {
    stripUnknown: true,
  });
  return myProduct;
};

export { readContactService }
