import { Request, Response } from 'express';

export default class ManController {
  static index(req: Request, res: Response): void {
    try{
      res.end('index endpoint')
    } catch(error){
      res.status(500).end();
    }
  }
}
