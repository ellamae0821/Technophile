const Phone = require("./Phone");
const Tablet = require("./Tablet");
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


var SmartPhone = function (callPhone){
  Phone.call(SmartPhone.prototype, callPhone);
  GameConsole.call(SmartPhone.prototype, 'Smart Phone');
  Tablet.call(SmartPhone.prototype);
  WebBrowser.call(SmartPhone.prototype);
};

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;