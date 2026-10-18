import moment from 'moment';
import { createLogger, format, transports } from 'winston';
import { LogI } from '@shared/interfaces/log.interface.js';
import { config } from '../environments/load-env.js';

const { combine, timestamp, printf, colorize } = format;
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize({ all: true }),
    logFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
});

export class LogHelper {
  async error(log: LogI): Promise<void> {
    const { nodeEnv } = config.server;
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    if (nodeEnv === 'development') {
      console.error(timestamp, 'Error: ', log.message);
      return;
    }

    if (log.req?.body?.password) log.req.body.password = '';
    const newLog = {
      timestamp,
      microservice: log.msName,
      type: log.type,
      message: log.message,
      request: {
        url: log.req?.originalUrl,
        method: log.req?.method,
        headers: log.req?.headers,
        body: log.req?.body,
        params: log.req?.params,
        query: log.req?.query,
      },
    };

    logger.error('Error capturado:', newLog);
  }
}
