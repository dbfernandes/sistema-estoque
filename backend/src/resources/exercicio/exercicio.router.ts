import { Router, Request, Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.send('Página principal do site');
});
router.get('/sobre', (req: Request, res: Response) => {
  res.send('Página sobre');
});

router.get('/bemvindo/:nome', (req: Request, res: Response) => {
  res.end(`Seja bem vindo ${req.params.nome}`);
});

router.get(/^\/(api|res: Responset)\/.+$/, (req: Request, res: Response) => {
  res.send('Envio de dados da API!');
});

router.get('/lorem/:qtd', (req: Request, res: Response) => {
  res.send(
    lorem.generateParagraphs(+req.params.qtd).replace(/\n/g, '<br><br>\n'),
  );
});
export default router;
