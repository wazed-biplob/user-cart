import { Request, Response } from 'express';
import { userServices } from './user.service';

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const result = await userServices.createNewUser(userData);

    res.json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: { code: 404, description: error.message },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId: id } = req.params;

    const result = await userServices.getUserById(Number(id));
    res.json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const { userId: id } = req.params;

    const result = await userServices.updateUserInfo(userData, Number(id));

    res.json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId: id } = req.params;
    const result = await userServices.deleteUserById(Number(id));
    if (result.deletedCount) {
      res.json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const addNewOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = req.body;

  try {
    const result = await userServices.addNewOrder(data, Number(userId));

    if (result) {
      res.json({
        success: true,
        message: 'Order created successfully!',
        data: null,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      success: false,
      message: 'Something went wrong!',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const { userId: id } = req.params;

    const result = await userServices.getOrdersByUserId(Number(id));
    if (result) {
      res.json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      success: false,
      message: 'Orders Not Found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};
export const userController = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserInfo,
  deleteUserById,
  addNewOrder,
  getOrdersByUserId,
};
