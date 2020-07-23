'use strict';

const antlr4 = require('antlr4');
const { parse } = require('./parser');
const Listener = require('./parser/JSON_ANTLRListener');

const jsonString = '{"prop": "val"}';

const listener = new Listener();
const tree = parse(jsonString, { buildParseTrees: true });

// example of using walker and listener
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

// example of using visitor
// antlr4.tree.ParseTreeVisitor.DEFAULT.visit(tree);

