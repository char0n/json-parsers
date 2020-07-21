'use strict';

const antlr4 = require('antlr4');
const Lexer = require('./JSON_ANTLRLexer');
const Parser = require('./JSON_ANTLRParser');

function parse(text, { buildParseTrees = false} = {}) {
    // using an API as documented in https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
    // It seems like these instances must be created anew for each parse.
    var chars = new antlr4.InputStream(text);
    var lexer = new Lexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new Parser(tokens);
    parser.buildParseTrees = buildParseTrees;

    parser._interp.predictionMode = antlr4.atn.PredictionMode.SLL;

    if (parser._errHandler.lastErrorIndex !== -1) {
        throw Error("errors found while parsing with Antlr4");
    }

    return parser.json();
}

module.exports = {
  parse,
};
