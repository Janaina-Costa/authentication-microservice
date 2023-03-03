import { Request, Response, Router } from 'express';
import { v4 } from 'uuid';

const userRoute = Router();

// get /users
userRoute.get('/users', (req:Request, res:Response) => {
  const users = [{ id: v4(), userName: 'Tabata' }];
  res.status(200).send({ users });
});

// get /user/:id
userRoute.get('/users/:uuid', (req:Request<{uuid:string}>, res:Response) => {
  const { uuid } = req.params;
  res.status(200).send({ uuid });
});

// post /users
userRoute.post('/users', (req:Request, res:Response) => {
  const newUser = req.body;
  console.log(newUser);

  res.status(200).send(newUser);
});

// put /users/:id
userRoute.put('/users/:uuid', (req:Request<{uuid:string}>, res:Response) => {
  const { uuid } = req.params;
  const userUpdated = req.body;

  userUpdated.uuid = uuid;// acrescenta o id no objeto do body

  res.status(200).send(userUpdated);
});

// delete /users/:id
userRoute.delete('/users/:uuid', (req:Request, res:Response) => {
  const { uuid } = req.params;
  res.status(200).send({ message: `usuario ${uuid} deletado com sucesso` });
});

export default userRoute;
