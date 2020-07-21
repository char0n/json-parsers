'use strict';

const { parseTree } = require('jsonc-parser');

const jsonString = '{"prop": "val" sdfasdfas }}';

const errors = [];
console.dir(parseTree(jsonString, errors));
console.dir(errors);


