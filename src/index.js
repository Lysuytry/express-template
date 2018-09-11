import app from './app';
import http from 'http';
import config from './lib/config';

const server = http.Server(app);

//if no route match => matched this route instead
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//error handling middleware
//always at the bottom of the code
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err);
});

server.listen(config.getPort(), err => {
  if (err) console.error(err);
  else console.log(`Server is listen on Port : ${config.getPort()}`);
});
