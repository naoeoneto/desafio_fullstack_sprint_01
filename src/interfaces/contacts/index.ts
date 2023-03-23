import { IUserContact } from "../users";

export interface IContactRequest {
  fullName: string;
  email: string;
  secondEmail: string;
  phoneNumber: string;
  secondPhoneNumber: string;
}

export interface IContact {
  id: string;
  fullName: string;
  email: string;
  secondEmail?: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  fullName?: string;
  email?: string;
  secondEmail?: string;
  phoneNumber?: string;
  secondPhoneNumber?: string;
}
