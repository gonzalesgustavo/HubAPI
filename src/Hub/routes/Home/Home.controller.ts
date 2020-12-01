import { Request, Response } from 'express';
import { Controller } from '../../../core/types.core';
import logger from '../../../core/Utils/Winston';
import trial from '../../models/trial';
import {Document} from 'mongoose';
import Responder from '../../../core/Utils/Responder';
export class HomeController extends Controller {
  static async index(req: Request, res: Response): Promise<void> {
    try {
      const trials: Document[] = await trial.find({});
      res.status(200).json(trials);
    } catch (error) {
      logger.info(error);
      res.end('error')
    }
  }
  static async create(req: Request, res: Response): Promise<void> {
    const {body} = req;
    try {
      const newTrial = new trial({name: body.name});
      await newTrial.save()
      res.status(200).json(newTrial.toJSON());
    } catch (error) {
      logger.info(error);
      res.end('error')
    }
  }
  static async remove(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    try {
      await trial.findByIdAndDelete({_id: id})
      res.status(204).end();
    } catch (error) {
      logger.info(error);
      res.end('error')
    }
  }
}
