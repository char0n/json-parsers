# json-source-map

### Source map support

Supports source map via location objec.
Location object has properties (zero-based numbers):

- line: line number in JSON file.
- column: column number in JSON string (from the beginning of line).
- pos: character position in JSON file (from the beginning of JSON string).

```js
'use strict';

const { parse } = require('json-source-map');

const jsonString = '{"test": 3}';

const ast = parse(jsonString, null, 2);

console.dir(JSON.stringify(ast, null, 2));
```

### Error recovery

No error recovery whatsoever. When it is not possible to parse JSON, a SyntaxError exception with exactly the same message is thrown.

```js
'use strict';

const { parse } = require('json-source-map');

const jsonString = '{"test": test}';

const ast = parse(jsonString, null, 2); // throws SyntaxError
```

### Additional features

 - supports BigInt
 - supports Maps and Sets

### References

 - https://github.com/epoberezkin/json-source-map
 - https://www.npmjs.com/package/json-source-map

