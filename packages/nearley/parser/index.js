'use strict';

const moo = require('moo');
const nearley = require('nearley');
const nearley_parser = require('./nearley_json_parser_tokenizer');

var mooLexer = moo.compile({
  WS: {match: /[ \t\n\r]+/, lineBreaks: true},
  StringLiteral: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
  NumberLiteral: /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,
  Comma: ',',
  Colon: ':',
  LCurly: '{',
  RCurly: '}',
  LSquare: '[',
  RSquare: ']',
  True: /true/,
  False: /false/,
  Null: /null/,
})

function parse(input) {
  // No known API to reset the parser state, may not be possible to avoid parser reinitialization.
  // trying to clone the internal state of the parser to face a "reset" also fails
  var nearleyJsonParser = new nearley.Parser(nearley_parser.ParserRules, nearley_parser.ParserStart);

  mooLexer.reset(input)
  var tokens = []
  var tok
  while (tok = mooLexer.next()) {
    if (tok.type !== "WS") {
      tokens.push(tok)
    }
  }

  nearleyJsonParser.feed(tokens);
  return nearleyJsonParser;
}

module.exports = {
  parse,
};


