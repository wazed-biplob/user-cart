import express from 'express';

import { userController } from './user.controller';

const router = express.Router();

// Users
router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUserInfo);
router.delete('/:userId', userController.deleteUserById);

// Orders
router.put('/:userId/orders', userController.addNewOrder);
router.get('/:userId/orders', userController.getOrdersByUserId);
export const userRoutes = router;
