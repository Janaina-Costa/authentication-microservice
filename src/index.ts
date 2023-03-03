import express from 'express';
import userRoute from './Routes/users';

const server = express();
const PORT = 3004;
const HOST = 'http://localhost:';

server.use(express.json());
server.use(userRoute);

server.listen(PORT, () => console.log(`Server is running on ${HOST}${PORT}`)
);
