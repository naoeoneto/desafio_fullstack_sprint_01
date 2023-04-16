import { IUserContact } from "../users";

export interface IContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  secondEmail: string;
  phoneNumber: string;
  secondPhoneNumber: string;
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  secondEmail?: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  secondEmail?: string;
  phoneNumber?: string;
  secondPhoneNumber?: string;
}
