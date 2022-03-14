import { app } from './app';
import Logger, { LogLevel } from './logger';

const { PORT = 5555 } = process.env;

// Set LogLevel to Info
Logger.setLogLevel(LogLevel.Info);

app.listen(PORT, () => {
  Logger.info('Express initialized on port=%s', PORT);
});
