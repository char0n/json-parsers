# jsonc-parser

Scanner and parser for JSON with comments.

### Source map support

Supports source maps via `offset` and `length` property on AST node object.

```js
'use strict';

const { parseTree } = require('jsonc-parser');

const jsonString = '{"test": "test"}';

console.dir(parseTree(jsonString).children[0].children[0].offset);
console.dir(parseTree(jsonString).children[0].children[0].length);
```

### Error recovery

On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
Error recovery algorithm is exceptional. Unfortunately it strips the invalid tokens
from resulting AST instead of producing `Error` or `Unknown` AST nodes.

```js
'use strict';

const { parseTree } = require('jsonc-parser');

const jsonString = '{"prop": "val" sdfasdfas }}';

console.dir(parseTree(jsonString).children[0]);
```

### Additional features

 - contains API for computing and applying edits to a JSON string
 - contains other APIs like visitor, scanner, location, etc...
 - supports JavaScript line comments
 - supports JavaScript block comments
 - supports trailing commas

### References

 - https://www.npmjs.com/package/jsonc-parser
 - https://github.com/microsoft/node-jsonc-parser
