import { Request, Response } from 'express';
import { userServices } from './user.service';

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    console.log(userData);
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
      error: `Error Message : ` + error,
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

export const userController = {
  getAllUsers,
  createNewUser,
};
