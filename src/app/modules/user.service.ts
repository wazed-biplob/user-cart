import { TUser } from './user.interface';
import { User } from './user.model';

const createNewUser = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

export const userServices = {
  getAllUsers,
  createNewUser,
};
