import * as url from "url";
import pino from "pino";
import PinoPretty from "pino-pretty";

const __dirname = url.fileURLToPath(new URL("../..", import.meta.url));

let loggerConfig;

if (process.env.NODE_ENV === "production") {
  loggerConfig = {
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  };
} else {
  loggerConfig = {
    PinoPretty: {
      colorize: true,
      ignore: "hostname,pid",
      translateTime: "HH:MM:ss.l",
    },
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  };
}

const transports = pino.transport({
  targets: [
    { target: "pino/file", options: { destination: `${__dirname}/app.log` } },
    {
        target: '@logtail/pino',
        options: { sourceToken: process.env.LOGTAIL_PINO_KEY },
      },
  ],
});

const logger = pino(loggerConfig, transports);

export default logger;
