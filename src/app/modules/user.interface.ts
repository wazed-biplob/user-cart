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
  quanity: number;
}
export interface TUser {
  userId: number;
  userName: TUserName;
  password: string;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders;
}
