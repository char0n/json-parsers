'use strict';

const Parser = require('tree-sitter');
const JSONGrammar = require('tree-sitter-json');

const parser = new Parser();
parser.setLanguage(JSONGrammar);

const jsonString = '{"prop": "val"}';
const tree = parser.parse(jsonString);

console.dir(tree);
console.log(tree.rootNode.startPosition);
console.log(tree.rootNode.endPosition);
