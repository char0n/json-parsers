# json-ast

Lossless JSON-to-AST Parser and AST-to-JSON Generator. This library is using
[PEG.js](https://pegjs.org/) parser generator under the hood.

### Source map support

Source maps is available via `L` object containing `line`, `column` and `offset` number.

```js
'use strict';

const { parse } = require('json-asty');

const jsonString = '{"prop": "val"}';

console.dir(parse(jsonString));
```

### Error recovery

No error recovery whatsoever. Generates better errors than native `JSON.parse` though.

### Additional features

 - ability to construct and execute AST queries against AST tree.

### References

 - https://github.com/rse/json-asty
 - https://github.com/rse/json-asty
