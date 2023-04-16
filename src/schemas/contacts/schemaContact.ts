import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from "../../interfaces/contacts";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  secondEmail: yup.string().email().nullable().notRequired(),
  phoneNumber: yup.string().length(11).required(),
  secondPhoneNumber: yup.string().length(11).nullable().notRequired(),
});

const contactResponseSchema: SchemaOf<IContact> = yup.object().shape({
  id: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  secondEmail: yup.string().email().nullable(),
  phoneNumber: yup.string(),
  secondPhoneNumber: yup.string().nullable(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const contactListSchema: SchemaOf<IContact[]> = yup.array(
  contactResponseSchema
);

const contactUpdateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
  firstName: yup.string().notRequired(),
  lastName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  secondEmail: yup.string().email().nullable().notRequired(),
  password: yup.string().notRequired(),
  phoneNumber: yup.string().length(11).notRequired(),
  secondPhoneNumber: yup.string().length(11).nullable().notRequired(),
});

export {
  contactSchema,
  contactResponseSchema,
  contactUpdateSchema,
  contactListSchema,
};
