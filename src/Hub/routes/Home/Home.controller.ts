import { Request, Response } from 'express';
import { Controller } from '../../../Core/types.core';
import logger from '../../../Core/Utils/Winston';
import {Document} from 'mongoose';
import Responder from '../../../Core/Utils/Responder';
export class HomeController extends Controller {
  static async index(req: Request, res: Response): Promise<void> {
    try {
     Responder.Ok({
       res,
       payload: []
     })
    } catch (error) {
      logger.info(error);
      res.end('error')
    }
  }
}
