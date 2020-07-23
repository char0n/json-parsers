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

### Additional features

 - can build parse trees and generate listeners and visitors
 - automatically constructs parse trees for you
 - visitor and listener mechanism lets you implement DOM visiting or SAX-analogous event processing of tree nodes

#### Incremental parsing

Incremental parsing is not supported in ANTLR4 library at this time.
There is an [attempt by the community](https://github.com/dberlin/antlr4ts/tree/incremental) for ANTLR4 to support incremental parsing though.

### Additional notes

 - seems like a very mature library
 - AST has to be constructed manually from Parse Tree via Listener
 - second fastest parser generator out there; run this online benchmark to see [Chevrotain performance](https://sap.github.io/chevrotain/performance/)
 - there is actually a [book](https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/) about antlr4
 - ANTLR4 is producing parse trees instead of ASTs (more [here](https://github.com/antlr/antlr4/blob/master/doc/faq/parse-trees.md#what-if-i-need-asts-not-parse-trees-for-a-compiler-for-example))
 - when using JavaScript runtime there is a constant warning: `Warning: Accessing non-existent property 'INVALID_ALT_NUMBER' of module exports inside circular dependency`

### References

 - https://www.antlr.org/
 - https://www.npmjs.com/package/antlr4
 - https://github.com/antlr/antlr4
 - https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/
 - https://github.com/svzdvd/antlr4-javascript-example
 - http://homepage.divms.uiowa.edu/~slonnegr/plf/Book/
 - https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
 - https://saumitra.me/blog/antlr4-visitor-vs-listener-pattern/
