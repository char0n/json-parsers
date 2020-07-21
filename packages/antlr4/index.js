'use strict';

const { parse } = require('./parser');

const jsonString = '{"prop" "val';

console.dir(parse(jsonString, { buildParseTrees: true }).children[0].children[1]);
