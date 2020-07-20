'use strict';

const { parse } = require("json-asty")

const jsonString = '{"prop": "val}';

console.dir(parse(jsonString));
