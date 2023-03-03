import { Router } from 'express';
import userController from '../controllers/userController';

const userRoute = Router();

userRoute.get('/users', userController.index);

userRoute.get('/users/:uuid', userController.show);

userRoute.post('/users', userController.store);

userRoute.put('/users/:uuid', userController.update);

userRoute.delete('/users/:uuid', userController.delete);

export default userRoute;
