import { Schema, model } from 'mongoose';
import { TAddress, TOrders, TUser, TUserName } from './user.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    maxlength: [20, 'Maximum 20 Characters Allowed For First Name'],
    required: [true, 'First Name is required'],
    validate: {
      validator: function (value: string) {
        const firstName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstName === value;
      },
      message: `{VALUE} should be written correctly`,
    },
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [20, 'Maximum 20 Characters Allowed For First Name'],
    required: [true, 'Last Name is required'],
    validate: {
      validator: function (value: string) {
        const firstName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstName === value;
      },
      message: `{VALUE} should be written correctly`,
    },
  },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const ordersSchema = new Schema<TOrders>({
  productName: { type: String },
  price: { type: Number },
  quanity: { type: Number },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: [true, 'ID is required'], unique: true },
  userName: { type: userNameSchema, required: true },
  password: { type: String, required: [true, 'Password is required'] },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String] },
  address: { type: addressSchema, required: true },
  orders: { type: ordersSchema },
});

export const User = model<TUser>('user', userSchema);
