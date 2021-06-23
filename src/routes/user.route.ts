import express from 'express';
import { fetchAccounts } from '../controller/fetchAccounts.controller';
import { addAccountController } from '../controller/addAccount.controller';
import { privateRouteMiddleware } from '../middleware/private-route.middleware';
import { deleteAccountController } from '../controller/deleteAccount.controller';

const router = express.Router();

router.use(privateRouteMiddleware);

router.post('/all', privateRouteMiddleware, fetchAccounts);

router.post('/', privateRouteMiddleware, addAccountController);

router.patch('/', privateRouteMiddleware, deleteAccountController);

export { router as userRouter };
