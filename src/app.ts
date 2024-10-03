import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();



// Middlewares
app.use(express.json());

// Rotas

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
