import { Model } from 'mongoose';

export interface TUserName {
  firstName: string;
  lastName: string;
}

export interface TAddress {
  street: string;
  city: string;
  country: string;
}

export interface TOrders {
  productName: string;
  price: number;
  quantity: number;
}
export interface TUser {
  userId: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders[];
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  userExists(id: number): Promise<TUser | null>;
}
