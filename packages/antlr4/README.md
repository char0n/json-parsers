# Antlr4

ANTLR (ANother Tool for Language Recognition) is a powerful parser generator for reading, processing, executing, or translating structured text or binary files. It's widely used to build languages, tools, and frameworks. From a grammar, ANTLR generates a parser that can build parse trees and also generates a listener interface (or visitor) that makes it easy to respond to the recognition of phrases of interest.

### Source map support

Source map support available. Every AST node has `start` and `stop` attributes containing
additional `line` and `column` attributes. In addition, string tokens can be extracted from AST node
to see what was the original string that created the AST node.

```js
'use strict';

const { parse } = require('./parser');

const jsonString = '{"prop": "val"}';

console.dir(parse(jsonString, { buildParseTrees: true }).children[0]);
```

### Error recovery

There is a good error reporting facility and a sophisticated error recovery strategy.
ANTLR’s error recovery mechanism is based upon Niklaus Wirth’s early ideas in Algorithms + Data Structures = Programs.
Recovery is done by scanning following tokens. Error strategies can be altered.
When parser intercepts syntax error it generates appropriate `ERROR` AST node as part of AST tree.

```js
'use strict';

const { parse } = require('./parser');

const jsonString = '{"prop" "val';

console.dir(parse(jsonString, { buildParseTrees: true }).children[0].children[1]);
```

### Additional notes

 - seems like a very mature library
 - second fastest parser generator out there; run this online benchmark to see [Chevrotain performance](https://sap.github.io/chevrotain/performance/)
 - there is actually a [book](https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/) about antlr4

### References

 - https://www.antlr.org/
 - https://www.npmjs.com/package/antlr4
 - https://github.com/antlr/antlr4
 - https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/
