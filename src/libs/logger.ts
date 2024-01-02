import winston from 'winston';
import config from '../../app-config';

const debugLevel = config.server.debug;
const isDevelopment = process.env.NODE_ENV === 'development';

const logger = winston.createLogger({
  level: isDevelopment
    ? "debug"
    : debugLevel,
  format: isDevelopment
    ? winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    : winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
  transports: [
    new winston.transports.Console()
  ],
});

export default logger;
