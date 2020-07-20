# json-to-ast

JSON AST parser

### Source map support

Supports source maps via `Location` object. Every AST node contains `loc`
attribute with `start`, `end` attributes.

```js
'use strict';

const parse = require('json-to-ast');

const jsonString = '{"prop": "val"}';

console.dir(parse(jsonString, { loc: true }));
```

### Error recovery

No error recovery whatsoever. Generates better errors than native `JSON.parse` though.

```js
'use strict';

const parse = require('json-to-ast');

const jsonString = '{"prop": "val}';

console.dir(parse(jsonString, { loc: true })); // throws SyntaxError
```

### References

 - https://astexplorer.net/
 - https://github.com/vtrushin/json-to-ast
 - https://www.npmjs.com/package/json-to-ast

