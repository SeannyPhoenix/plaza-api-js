import {Server} from 'http';

function signal(server: Server) {
  // The signals we want to handle
  // NOTE: although it is tempting,
  // the SIGKILL signal (9) cannot be intercepted and handled
  type SIGS = Record<string, number>;
  const signals: SIGS = {
    SIGHUP: 1,
    SIGINT: 2,
    SIGTERM: 15,
  };

  // Do any necessary shutdown logic for our application here
  const shutdown = (signal: string, value: number) => {
    console.log('shutting down!');
    server.close(() => {
      console.log(`server stopped by ${signal} with value ${value}`);
      process.exit(128 + value);
    });
  };

  // Create a listener for each of the signals that we want to handle
  Object.keys(signals).forEach((signal) => {
    process.on(signal, () => {
      console.log(`process received a ${signal} signal`);
      shutdown(signal, signals[signal]);
    });
  });
}

export default signal;
