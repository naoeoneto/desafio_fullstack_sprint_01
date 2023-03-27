import { IUserLogin, IUserRequest, IUserUpdate } from "../../interfaces/users";
import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { readUserService } from "../../services/users/readUser.service";
import { updateUserService } from "../../services/users/updateUser.service";
import { deleteUserService } from "../../services/users/deleteUser.service";
import { listUsersService } from "../../services/users/listUsers.service";
import { loginUserService } from "../../services/users/loginUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: IUserRequest = req.body;
  const user = await createUserService(data);
  return res.status(201).json(user);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const data: IUserUpdate = req.body;
  const user = await updateUserService(data, req.user.id);
  return res.status(200).json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req.user.id);
  return res.status(204).json(user);
};

const readUserController = async (req: Request, res: Response) => {
  const user = await readUserService(req.params.id);
  return res.status(200).json(user);
};

const loginUserController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const user = await loginUserService(data);
  return res.status(200).json({user: user.returnedUser, token: user.token });
};

export {
  createUserController,
  readUserController,
  updateUserController,
  deleteUserController,
  listUsersController,
  loginUserController,
};
