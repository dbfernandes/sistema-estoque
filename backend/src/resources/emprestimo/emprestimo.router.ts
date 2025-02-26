import { Router } from 'express'
import solicitacaoController from './emprestimo.controller';

const router = Router();

router.post('/emprestimo/', solicitacaoController.create)
router.get('/emprestimo/', solicitacaoController.list)
router.get('/emprestimo/:id', solicitacaoController.getById);
router.delete('/emprestimo/:id', solicitacaoController.remove);
router.put('/emprestimo/:id', solicitacaoController.update);
export default router;