import * as url from "url";
import pino from "pino";
import PinoPretty from "pino-pretty";

/*   
Emergency (emerg): indicates that the system is unusable and requires immediate attention.
Alert (alert): indicates that immediate action is necessary to resolve a critical issue.
Critical (crit): signifies critical conditions in the program that demand intervention to prevent system failure.
Error (error): indicates error conditions that impair some operation but are less severe than critical situations.
Warning (warn): signifies potential issues that may lead to errors or unexpected behavior in the future if not addressed.
Notice (notice): applies to normal but significant conditions that may require monitoring.
Informational (info): includes messages that provide a record of the normal operation of the system.
Debug (debug): intended for logging detailed information about the system for debugging purposes.
*/

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
