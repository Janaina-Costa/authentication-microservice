import express, { Request, Response } from 'express';

const server = express();
const PORT = 3003;
const HOST = 'http://localhost:';

server.get('/', (req: Request, res:Response) => {
  res.status(200).send({ foo: 'bar' });
});

server.listen(3003, () => console.log(`Server is running on ${HOST}${PORT}`)
);
