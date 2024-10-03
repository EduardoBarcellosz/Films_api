import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// Use DATABASE_URL no lugar de MONGO_URI
const uri: string = process.env.DATABASE_URL as string;
const client = new MongoClient(uri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error);
    process.exit(1); // Encerra o processo se houver falha na conexão
  }
};

export default client;
