'use strict';

const parse = require('json-to-ast');

const jsonString = '{"prop": "val}';

console.dir(parse(jsonString, { loc: true })); // throws SyntaxError
