# JavaScript JSON parsers
Monorepo containing research for various JSON parsers for JavaSript.

### Requirements

I consider quality JSON parser to support **source maps** and implements **error recovery** mechanism.

This is the list of researched JSON parsers. Clicking on specific json parser
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
lacked features I'd expect from the proper parser:

 - [parsimmon](https://github.com/jneen/parsimmon) - very primitive, no location, nor error recovery mechanism
 - [Hand-build parser](https://github.com/sap/chevrotain/blob/gh-pages/performance/jsonParsers/handbuilt/handbuilt.js)
 - [PEG.js](https://github.com/pegjs/pegjs) - no advanced JSON grammar available (no location, no error recovery)
 - [jison](https://github.com/zaach/jison) - seems dead (no commits for 3 years), error recovery in alpha mode
 - [nyma](https://www.npmjs.com/package/myna-parser) - usage in community is minimal, documentation consist of 1 A4 document
 - [ohm.js](https://github.com/harc/ohm) - sparse documentation, no release in 2 years, no mention about error recovery mechanism

### Summary

This section describes candidates of JSON parsers that got into final selection.
The order that the libraries are mentioned in doesn't express any preference.

One of the most interesting parsers (not a parser generator) that I've researched here is [jsonc-parser](./packages/jsonc-parser) developed by [Microsoft](https://www.microsoft.com/).
It's really a piece of art, with no dependencies, advanced error recovery mechanism and source maps support.
It also goes beyond the JSON spec and optionally supports JS comments and trailing commas. Contains
API for incremental parsing and edits.

The rest of the parsers that got into this selection falls into categories of true [parser generators](https://en.wikipedia.org/wiki/Compiler-compiler).
[tree-sitter](./packages/tree-sitter), [Chevrotain](./packages/chevrotain) and [Antlr4](./packages/antlr4) are
on the same level feature-vise.

*Chevrotain* seems like most configurable one, allowing switching the
fault tolerance/error recovery mechanism on and off, along with optional parsing of comments and switching
between [CST and AST trees](https://sap.github.io/chevrotain/docs/guide/concrete_syntax_tree.html#ast-vs-cst).
It's also the fastest (JavaScript) parser generator out there.

*Antlr4* is a very mature library with JavaScript runtime, considered a second fastest out there.
It's masterfully documented and there is an actual [book](https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/)
written about it. Error recovery strategies can be altered.

*tree-sitter* supports incremental parsing, AST updates and has one of the most sophisticated
error recovery mechanism out there. The library is super fast as is written in C and can be used
via node.js bindings or [WASM](https://webassembly.org/). The biggest thing about this library
is that [Github uses it to highlight all it's code](https://github.blog/2018-10-31-atoms-new-parsing-system/) and
[Atom editor](https://atom.io/) uses it as well. Error recovery mechanism cannot be turned off by a configuration.

### Additional resources

 - [Implementing custom JSON parser from scratch](https://lihautan.com/json-parser-with-javascript/)
 - [Backus-Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
 - [McKeeman Form](https://www.crockford.com/mckeeman.html)
 - [Parsing absolutely anything in JavaScript using Earley algorithm](https://medium.com/@gajus/parsing-absolutely-anything-in-javascript-using-earley-algorithm-886edcc31e5e)
 - [Error Detection and Recovery in LR Parsers](http://what-when-how.com/compiler-writing/bottom-up-parsing-compiler-writing-part-13/)
 - [Error Recovery for LR Parsers](http://www.dtic.mil/dtic/tr/fulltext/u2/a043470.pdf)
 - [JavaScript Parsing Libraries Benchmark](https://sap.github.io/chevrotain/performance/)
 - [Comparison of parser generators](https://en.wikipedia.org/wiki/Comparison_of_parser_generators)
 - [Efficient and Flexible Incremental Parsing](https://www.researchgate.net/publication/2377179_Efficient_and_Flexible_Incremental_Parsing)
