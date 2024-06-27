import { Router } from 'express';
import produtoController from './product.controller';
const router = Router();
import schemaProduto from './product.schema';
import validate from '../../middlewares/validate';
import isAdmin from '../../middlewares/isAdmin';

router.get('/', produtoController.index);
router.post('/', isAdmin, validate(schemaProduto), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);

export default router;
