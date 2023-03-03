import express from 'express';
import errorHandler from './middlewares/error.handler.middleware';
import statusRoute from './Routes/statusRoute';
import userRoute from './Routes/users';

const server = express();
const PORT = 3004;
const HOST = 'http://localhost:';

server.use(express.json());
server.use(statusRoute);
server.use(userRoute);
server.use(errorHandler);

server.listen(PORT, () => console.log(`Server is running on ${HOST}${PORT}`)
);
