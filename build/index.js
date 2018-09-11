'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('./lib/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = _http2.default.Server(_app2.default);

//if no route match => matched this route instead
_app2.default.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//error handling middleware
//always at the bottom of the code
_app2.default.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err);
});

server.listen(_config2.default.getPort(), err => {
  if (err) console.error(err);else console.log(`Server is listen on Port : ${_config2.default.getPort()}`);
});
//# sourceMappingURL=index.js.map