import { Router, Request, Response } from 'express';


const router = Router();



// Rotas de exemplo
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Listando todos os filmes' });
});

router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Criando um novo filme' });
});

export default router;