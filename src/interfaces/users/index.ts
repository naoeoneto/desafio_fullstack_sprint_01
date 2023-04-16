export interface IUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  secondEmail?: string;
  password: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
}

export interface IUser {
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

export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  secondEmail?: string;
  password?: string;
  phoneNumber?: string;
  secondPhoneNumber?: string;
}

export interface IUserContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  returnedUser: IUser;
  token: string;
}
