import express from 'express';
import logger from 'morgan';
import parser from 'body-parser';

const app = new express();

// ======== Configuration Express ========================
app.use('/', express.static('public'));
app.use(express.json({ limit: '5mb' }));
app.use(logger('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
// combined
app.enableCors({ origin: true });
// =======================================================

export default app;
