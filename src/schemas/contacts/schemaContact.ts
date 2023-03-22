import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from "../../interfaces/contacts";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  secondEmail: yup.string().email().notRequired(),
  phoneNumber: yup.string().required(),
  secondPhoneNumber: yup.string().notRequired(),
});

const contactResponseSchema: SchemaOf<IContact> = yup.object().shape({
  id: yup.string(),
  fullName: yup.string(),
  email: yup.string().email(),
  secondEmail: yup.string().email(),
  phoneNumber: yup.string(),
  secondPhoneNumber: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  user: yup.object().shape({
    id: yup.string(),
    fullName: yup.string(),
    email: yup.string().email(),
    phoneNumber: yup.string(),
  }),
});

const contactUpdateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
  fullName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  secondEmail: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  phoneNumber: yup.string().notRequired(),
  secondPhoneNumber: yup.string().notRequired(),
});

export { contactSchema, contactResponseSchema, contactUpdateSchema };
