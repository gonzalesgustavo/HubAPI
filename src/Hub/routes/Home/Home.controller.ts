import { Request, Response } from 'express';
import { Controller } from '../../../core/types.core';
export class HomeController extends Controller {
  static index(req: Request, res: Response): void {
    res.send('hello');
  }
}
