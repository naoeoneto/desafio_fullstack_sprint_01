import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../../interfaces/users";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  secondEmail: yup.string().email().nullable().notRequired(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
  secondPhoneNumber: yup.string().nullable().notRequired(),
});

const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
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

const userListSchema = yup.array(userResponseSchema);

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  firstName: yup.string().notRequired(),
  lastName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  secondEmail: yup.string().email().nullable().notRequired(),
  password: yup.string().min(6).notRequired(),
  phoneNumber: yup.string().length(11).notRequired(),
  secondPhoneNumber: yup.string().length(11).nullable().notRequired(),
});

export { userSchema, userResponseSchema, userListSchema, userUpdateSchema };
