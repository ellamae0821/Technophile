const GameConsole = require("./GameConsole");
const WebBrowser = require("./WebBrowser");




function extend(destination, source){
  for (var k in source){
    if(source.hasOwnProperty(k)){
      destination[k] = source[k];
    }
  }
  return destination;
}


var NintendoDS = function (opts){
  GameConsole.call(NintendoDS.prototype, "Nintendo DS");
  WebBrowser.call(NintendoDS.prototype);

};

extend(NintendoDS.prototype, GameConsole.prototype);
extend(WebBrowser.prototype, GameConsole.prototype);

module.exports = NintendoDS;