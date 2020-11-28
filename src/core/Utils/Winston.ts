import { createLogger, transports, format } from 'winston';
import path from 'path';

const logger = createLogger({
  transports: [
    new transports.File({
      filename: path.join(__dirname, '../../../logs/logs.log'),
      level: 'logs',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.Console({
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export default logger;