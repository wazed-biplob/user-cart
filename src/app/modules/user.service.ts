import { TOrders, TUser } from './user.interface';
import { User } from './user.model';

const createNewUser = async (userData: TUser) => {
  if (await User.userExists(userData.userId)) {
    throw new Error('User Already Exists!');
  }
  const result = await User.create(userData);
  return result;
};
const getAllUsers = async () => {
  const result = await User.find().select('-password');
  return result;
};

const getUserById = async (id: number) => {
  if (await User.userExists(id)) {
    const result = await User.findOne({ userId: id }).select('-password');
    return result;
  } else {
    throw new Error('User not found!');
  }
};

const updateUserInfo = async (userData: TUser, id: number) => {
  if (await User.userExists(id)) {
    throw new Error('User Already Exists');
  }
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $set: userData },
    { new: true }
  );
  return result;
};

const deleteUserById = async (id: number) => {
  if (await User.userExists(id)) {
    const result = await User.deleteOne({ userId: id });
    return result;
  } else {
    throw new Error('User not found!');
  }
};

const addNewOrder = async (orderData: TOrders, id: number) => {
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $push: { orders: orderData } },
    { new: true }
  );
  return result;
};

const getOrdersByUserId = async (id: number) => {
  if (await User.userExists(id)) {
    const result = await User.findOne({ userId: id }, { orders: 1 });
    return result;
  } else {
    throw new Error('User not found!');
  }
};

const getTotalOrderPrice = async (id: number) => {
  if (await User.userExists(id)) {
    const user = await User.findOne({ userId: id });

    if (user && user.orders && user.orders.length > 0) {
      const result = await User.aggregate([
        { $match: { userId: id } },
        { $unwind: '$orders' },
        { $group: { _id: null, totalPrice: { $sum: '$orders.price' } } },
        { $project: { totalPrice: 1 } },
      ]);
      return result[0].totalPrice;
    }
  }
};

export const userServices = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserInfo,
  deleteUserById,
  addNewOrder,
  getOrdersByUserId,
  getTotalOrderPrice,
};
