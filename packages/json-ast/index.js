'use strict';

const { parse } = require('json-ast');

const jsonString = '{"test": test "test2": 3}}';

const ast = parse(jsonString, { verbose: true, junker: true });

console.dir(ast);
