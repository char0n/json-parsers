# json-ast

The original code was developed by Vlad Trushin. Breaking modifications were made by Romain Gaucher to create a less strict JSON parser. Additionally, a more typical interaction with the AST has been implemented.

### Source map support

This library supports source maps. Every AST node contains `position` attribute
with `start`, `end` and `human` attributes.

```js
'use strict';

const { parse } = require('json-ast');

const jsonString = '{"test": 3}';

const ast = parse(jsonString, { verbose: true });

console.dir(ast.child.position.start);
console.dir(ast.child.position.end);
console.dir(ast.child.position.human);
```

### Error recovery

Includes a limited error-recovery mode trying to catch (when `junker` set to true):
 - unclosed objects or arrays
 - too many closing braces or brackets
 - automatic comma injection
 - support for unquoted keys

```js
'use strict';

const { parse } = require('json-ast');

const jsonString = '{"test": test "test2": 3}}';

const ast = parse(jsonString, { verbose: true, junker: true });

console.dir(ast);
```

### Additional features

 - supports JavaScript line comments
 - supports JavaScript block comments

### References

 - https://www.npmjs.com/package/json-ast
 - https://github.com/neuroo/json-ast
