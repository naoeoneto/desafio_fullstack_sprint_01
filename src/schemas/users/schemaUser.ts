import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../../interfaces/users";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  secondEmail: yup.string().email().notRequired(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
  secondPhoneNumber: yup.string().notRequired(),
});

const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string(),
  fullName: yup.string(),
  email: yup.string().email(),
  secondEmail: yup.string().email(),
  phoneNumber: yup.string(),
  secondPhoneNumber: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const userListSchema = yup.array(userResponseSchema);

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  fullName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  secondEmail: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  phoneNumber: yup.string().notRequired(),
  secondPhoneNumber: yup.string().notRequired(),
});

export { userSchema, userResponseSchema, userListSchema, userUpdateSchema };
