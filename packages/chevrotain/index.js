'use strict';

const { parse } = require('./grammars/json');

const jsonString = '{"prop" "val"}'
const parseResult = parse(jsonString, { recoveryEnabled: true });

console.dir(parseResult);
