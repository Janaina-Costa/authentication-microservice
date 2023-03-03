import { NextFunction, Request, Response } from 'express';
import userRepository from '../repositories/userRepository';

class UserController {
  async index (req: Request, res: Response) {
    const users = await userRepository.findAll();
    res.status(200).send({ users });
  }

  async show (req:Request<{uuid:string}>, res:Response, next:NextFunction) {
    try {
      const { uuid } = req.params;
      const user = await userRepository.findById(uuid);

      res.status(200).send({ user });
    } catch (err) {
      next(err);
    }
  }

  async store (req:Request<{uuid:string}>, res:Response, next:NextFunction) {
    const user = req.body;
    const newUser = await userRepository.create(user);

    res.status(200).send({ newUser });
  }

  async update (req:Request<{uuid:string}>, res:Response, next:NextFunction) {
    const { uuid } = req.params;
    const userUpdated = req.body;

    userUpdated.uuid = uuid;// acrescenta o id no objeto do body
    await userRepository.update(userUpdated);

    res.status(200).send();
  }

  async delete (req:Request<{uuid:string}>, res:Response, next:NextFunction) {
    const { uuid } = req.params;
    await userRepository.remove(uuid);
    res.status(200).send();
  }
}

export default new UserController();
