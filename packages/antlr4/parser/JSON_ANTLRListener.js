// Generated from JSON_ANTLR.g4 by ANTLR 4.6
// jshint ignore: start

const antlr4 = require('antlr4');

// This class defines a complete listener for a parse tree produced by JSON_ANTLRParser.
function JSON_ANTLRListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JSON_ANTLRListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JSON_ANTLRListener.prototype.constructor = JSON_ANTLRListener;

// Enter every rule
JSON_ANTLRListener.prototype.enterEveryRule = function(node) {
  console.dir('enterEveryRule');
};

// Enter a parse tree produced by JSON_ANTLRParser#json.
JSON_ANTLRListener.prototype.enterJson = function(ctx) {
  console.dir('enterJson');
};

// Exit a parse tree produced by JSON_ANTLRParser#json.
JSON_ANTLRListener.prototype.exitJson = function(ctx) {
  console.dir('exitJson');
};


// Enter a parse tree produced by JSON_ANTLRParser#object.
JSON_ANTLRListener.prototype.enterObject = function(ctx) {
  console.dir('enterObject');
};

// Exit a parse tree produced by JSON_ANTLRParser#object.
JSON_ANTLRListener.prototype.exitObject = function(ctx) {
  console.dir('exitObject');
};


// Enter a parse tree produced by JSON_ANTLRParser#pair.
JSON_ANTLRListener.prototype.enterPair = function(ctx) {
  console.dir('enterPair');
};

// Exit a parse tree produced by JSON_ANTLRParser#pair.
JSON_ANTLRListener.prototype.exitPair = function(ctx) {
  console.dir('exitPair');
};


// Enter a parse tree produced by JSON_ANTLRParser#array.
JSON_ANTLRListener.prototype.enterArray = function(ctx) {
  console.dir('enterArray');
};

// Exit a parse tree produced by JSON_ANTLRParser#array.
JSON_ANTLRListener.prototype.exitArray = function(ctx) {
  console.dir('exitArray');
};


// Enter a parse tree produced by JSON_ANTLRParser#value.
JSON_ANTLRListener.prototype.enterValue = function(ctx) {
  console.dir('enterValue');
};

// Exit a parse tree produced by JSON_ANTLRParser#value.
JSON_ANTLRListener.prototype.exitValue = function(ctx) {
  console.dir('exitValue');
};

module.exports = JSON_ANTLRListener;
