'use strict';

const { parse } = require('json-source-map');

const jsonString = '{"test": test}';

const ast = parse(jsonString, null, 2); // throws SyntaxError
