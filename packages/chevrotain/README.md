# chevrotain

Chevrotain is a blazing fast and feature rich Parser Building Toolkit for JavaScript. It can be used to build parsers/compilers/interpreters for various use cases ranging from simple configuration files, to full fledged programing languages.

### Source map support

Sourcemaps are supported by exposing following properties on AST nodes:

```js
  startOffset: 0,
  endOffset: 0,
  startLine: 1,
  endLine: 1,
  startColumn: 1,
  endColumn: 1
```

```js
'use strict';

const { parse } = require('./grammars/json');

const jsonString = '{"prop" "val"}'
const parseResult = parse(jsonString);

console.dir(parseResult.cst.children.object[0].children);
```

### Error recovery

Chevrotain uses several fault tolerance / error recovery heuristics, which generally follow error recovery heuristics used in Antlr3.
Fault tolerance mechanism are excellently documented in this [documentation](https://sap.github.io/chevrotain/docs/tutorial/step4_fault_tolerance.html).
By default fault tolerance and error recovery heuristics are disabled. They can be enabled by passing a optional recoveryEnabled parameter.


```js
'use strict';

const { parse } = require('./grammars/json');

const jsonString = '{"prop" "val"}'
const parseResult = parse(jsonString, { recoveryEnabled: true });

console.dir(parseResult);
```

### Additional features

 - json grammar available with or without comments support
 - switching fault tolerance on/off by configuration
 - using either CST or AST (more info [here](https://sap.github.io/chevrotain/docs/guide/concrete_syntax_tree.html#ast-vs-cst))

### Additional notes

 - Error AST nodes are part of AST tree but are rather accumulated on `lexErrors` or `parseErrors` arrays

### References

 - https://sap.github.io/chevrotain/docs/
 - https://www.npmjs.com/package/chevrotain
 - https://github.com/SAP/chevrotain
