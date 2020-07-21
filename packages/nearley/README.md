# nearley

nearley is a simple, fast and powerful parsing toolkit.

### Source map support

Source map supported via `line`, `col` and `offset` attributes on every AST node.

```js
'use strict';

const { parse } = require('./parser');

const jsonString = '{"prop": "val"}';

console.dir(parse(jsonString).results[0][0][0][1]);
```

### Error recovery

No smart error recovery mechanism. Parser produces errors on invalid input.

```js
'use strict';

const { parse } = require('./parser');

const jsonString = '{prop": "val"}';

console.dir(parse(jsonString)); // throws Error
```

### Additional notes

 - pretty solid documentation
 - not very fast parser

### References

 - https://nearley.js.org/
 - https://www.npmjs.com/package/nearley
 - https://github.com/kach/nearley
