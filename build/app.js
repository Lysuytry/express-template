'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _pdfkit = require('pdfkit');

var _pdfkit2 = _interopRequireDefault(_pdfkit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();

// mongooseConfig();

// ======== Configuration Express ========================
app.use('/', _express2.default.static('public'));
app.use(_express2.default.json({ limit: '5mb' }));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
// combined
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// =======================================================

app.get('/', (req, res) => {
  const doc = new _pdfkit2.default();
  // Stripping special characters
  // const filename = // encodeURIComponent(filename) + '.pdf';
  const filename = 'example.pdf';
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  const content = 'req.body.content';
  doc.y = 300;
  doc.text(content, 50, 50);
  doc.pipe(res);
  doc.end();
});

exports.default = app;
//# sourceMappingURL=app.js.map