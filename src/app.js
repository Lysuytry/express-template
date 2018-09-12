import parser from 'body-parser';
import express from 'express';
import logger from 'morgan';
const app = new express();

// mongooseConfig();

// ======== Configuration Express ========================
app.use('/', express.static('public'));
app.use(express.json({ limit: '5mb' }));
app.use(logger('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
// combined
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// =======================================================

export default app;
