# tree-sitter

Tree-sitter is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited.

### Source map support

Full source map support consisting of `Location` object having `row` and `column` attributes.
Location object is assigned on `startPosition` and `endPopition` attributes of every CST node.
Along with that `startIndex` and `endIndex` are also available.

```js
'use strict';

const Parser = require('tree-sitter');
const JSONGrammar = require('tree-sitter-json');

const parser = new Parser();
parser.setLanguage(JSONGrammar);

const jsonString = '{"prop": "val"}';
const tree = parser.parse(jsonString);

console.log(tree.rootNode.startPosition);
console.log(tree.rootNode.endPosition);
```

### Error recovery

tree-sitter is robust enough to provide useful results even in the presence of syntax errors.
When parser intercepts syntax error it generates appropriate `ERROR` AST node as part of AST tree.
The rest of the input document is parsed and CST tree is created. The error recovery
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
 - dynamic CST updates with `edit` mode
 - contains API for CST nodes retrieval and traversal (via cursor mechanism)

### Additional notes

 - tree-sitter is implemented in C
 - [node.js](https://github.com/tree-sitter/node-tree-sitter) and [WASM](https://www.npmjs.com/package/web-tree-sitter) bindings exists
 - uses Parse Trees (CST) instead of AST
 - if there are missing fragments in parsed JSON, `MISSING` CST nodes are generated as part of the CST tree
 - documentation is for C devs, JS devs needs to see the [binding](https://github.com/tree-sitter/node-tree-sitter/blob/master/index.js) and map the C functions into JS
 - documentation claims that GitHub.com is using it for highlighting code written in several languages

### References

 - https://tree-sitter.github.io/tree-sitter/
 - https://github.blog/2018-10-31-atoms-new-parsing-system/
 - https://youtu.be/Jes3bD6P0To?t=124
 - https://github.com/tree-sitter/tree-sitter
 - https://www.npmjs.com/package/tree-sitter
 - https://github.com/tree-sitter/node-tree-sitter
 - https://www.npmjs.com/package/web-tree-sitter
 - https://github.com/tree-sitter/tree-sitter/blob/master/lib/binding_web/README.md
