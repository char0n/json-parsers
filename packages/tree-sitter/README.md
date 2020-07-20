# tree-sitter

Tree-sitter is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited.

### Source map support

Full source map support consisting of `Location` object having `row` and `column` attributes.
Location object is assigned on `startPosition` and `endPopition` attributes of every AST node.
Along with that `startIndex` and `endIndex` are also available.

### Error recovery

tree-sitter is robust enough to provide useful results even in the presence of syntax errors.
When parser intercepts syntax error it generates appropriate `ERROR` AST node as part of AST tree.
The rest of the input document is parsed and AST tree is created. The error recovery
is smart enough to try multiple possible parsing path simultaneously and chooses the one that makes the most sense.


```js
'use strict';

const Parser = require('tree-sitter');
const JSONGrammar = require('tree-sitter-json');

const parser = new Parser();
parser.setLanguage(JSONGrammar);

const jsonString = '{"prop": "val", val2}';
const tree = parser.parse(jsonString);

console.log(tree.rootNode.toString())
```

### Additional features

 - incremental parsing
 - dynamic AST updates with `edit` mode
 - contains API for AST nodes retrieval and traversal

### Additional notes

 - tree-sitter is implemented in C
 - [node.js](https://github.com/tree-sitter/node-tree-sitter) and [WASM](https://www.npmjs.com/package/web-tree-sitter) bindings exists
 - AST looks a little bit wild but should be manageable
 - if there are missing fragments in parsed JSON, `MISSING` AST nodes are generated as part of the AST tree
 - documentation is for C programmers
 - would require more time to fully understand

### References

 - https://tree-sitter.github.io/tree-sitter/
 - https://youtu.be/Jes3bD6P0To?t=124
 - https://github.com/tree-sitter/tree-sitter
 - https://www.npmjs.com/package/tree-sitter
 - https://github.com/tree-sitter/node-tree-sitter
 - https://www.npmjs.com/package/web-tree-sitter
 - https://github.com/tree-sitter/tree-sitter/blob/master/lib/binding_web/README.md
