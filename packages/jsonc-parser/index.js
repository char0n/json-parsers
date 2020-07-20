'use strict';

const { parseTree } = require('jsonc-parser');

const jsonString = '{"prop": "val" sdfasdfas }}';

console.dir(parseTree(jsonString).children[0]);


