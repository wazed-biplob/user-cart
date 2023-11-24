import { z } from 'zod';

const userNameZodSchema = z.object({
  firstName: z
    .string()
    .max(20)
    .min(1)
    .refine(
      (value) => {
        const formattedFirstName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return formattedFirstName === value;
      },
      { message: 'First Name should be written correctly' }
    ),
  lastName: z
    .string()
    .max(20)
    .min(1)
    .refine(
      (value) => {
        const formattedLastName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return formattedLastName === value;
      },
      { message: 'Last Name should be written correctly' }
    ),
});

export const addressZodSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export const ordersZodSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const userZodSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: userNameZodSchema,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressZodSchema,
  orders: z.array(ordersZodSchema).optional(),
});
