'use strict';

const { parse } = require('./parser');

const jsonString = '{"prop": "val"}';

console.dir(parse(jsonString)); // throws Error
