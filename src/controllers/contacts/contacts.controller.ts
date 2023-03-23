import {
  IContactRequest,
  IContactUpdate,
} from "./../../interfaces/contacts/index";
import { Request, Response } from "express";
import { createContactService } from "../../services/contacts/createContact.service";
import { readContactsByUserService } from "../../services/contacts/readContactsByUser.service";
import { readContactService } from "../../services/contacts/readContact.service";
import { updateContactService } from "../../services/contacts/updateContact.service";
import { deleteContactService } from "../../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const data: IContactRequest = req.body;
  const userId: string = req.user.id;
  const contact = await createContactService(data, userId);
  return res.status(201).json(contact);
};

const readContactsByUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contacts = await readContactsByUserService(userId);
  return res.status(200).json(contacts);
};

const readContactController = async (req: Request, res: Response) => {
  const contact = await readContactService(req.params.id);
  return res.status(200).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const data: IContactUpdate = req.body;
  const contact = await updateContactService(data, req.params.id);
  return res.status(200).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contact = await deleteContactService(req.params.id);
  return res.status(204).json(contact);
};

export {
  createContactController,
  readContactController,
  readContactsByUserController,
  updateContactController,
  deleteContactController,
};
