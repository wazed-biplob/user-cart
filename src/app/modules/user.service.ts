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
const getUserById = async (id: number) => {
  const result = await User.findOne({ userId: id });
  return result;
};

const updateUserInfo = async (userData: TUser, id: number) => {
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $set: userData },
    { new: true }
  );
  return result;
};

export const userServices = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserInfo,
};
