import cors from 'cors';
import { json, urlencoded } from 'body-parser';
export const APPMIDDLEWARE: any = [
  cors(),
  json(),
  urlencoded({ extended: false }),
];
