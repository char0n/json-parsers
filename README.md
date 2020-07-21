# json-parsers
Monorepo containing research for various json-parsers

This is the list of researched json parsers. Clicking on specific json parser
will lead you to specific research whitepaper of that particular parser.

- [json-ast](./packages/json-ast)
- [json-source-map](./packages/json-source-map)
- [jsonc-parser](./packages/jsonc-parser)
- [json-to-ast](./packages/json-to-ast)
- [json-asty](./packages/json-asty)
- [tree-sitter](./packages/tree-sitter)
- [Chevrotain](./packages/chevrotain)
- [Antlr4](./packages/antlr4)
- [nearley](./packages/nearley)

### Other JSON parser

This list contains parsers that seemed worth analyzing but after initial analysis
lacked basic features I'd expect from the proper parser:

 - [parsimmon](https://github.com/jneen/parsimmon) - very primitive, no location, nor error recovery mechanism
 - [Hand-build parser](https://github.com/sap/chevrotain/blob/gh-pages/performance/jsonParsers/handbuilt/handbuilt.js)
 - [PEG.js](https://github.com/pegjs/pegjs) - no advanced JSON grammar available (no location, no error recovery)

### Overall conclusion

@todo: jsonc-parser, tree-sitter, Chevrotain, Antlr4

### Additional resources

 - [Implementing custom JSON parser from scratch](https://lihautan.com/json-parser-with-javascript/)
 - [Backus-Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
 - [McKeeman Form](https://www.crockford.com/mckeeman.html)
 - [Parsing absolutely anything in JavaScript using Earley algorithm](https://medium.com/@gajus/parsing-absolutely-anything-in-javascript-using-earley-algorithm-886edcc31e5e)
 - [Error Detection and Recovery in LR Parsers](http://what-when-how.com/compiler-writing/bottom-up-parsing-compiler-writing-part-13/)
 - [Error Recovery for LR Parsers](http://www.dtic.mil/dtic/tr/fulltext/u2/a043470.pdf)
 - [JavaScript Parsing Libraries Benchmark](https://sap.github.io/chevrotain/performance/)
