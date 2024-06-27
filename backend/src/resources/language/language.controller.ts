import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function changeLanguage(req: Request, res: Response) {
  const { lang } = req.body;
  res.cookie('lang', lang);
  res.status(StatusCodes.OK).json({ lang });
}
export default { changeLanguage };
