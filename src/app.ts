import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import emailRoutes from './routes/routes';

const app = express();
app.use(cors());
app.use(json());
dotenv.config();
app.use('/api', emailRoutes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});