const Watch = require("./Watch");
const Tablet = require("./Tablet");




function extend(destination, source){
  for (var k in source){
    if(source.hasOwnProperty(k)){
      destination[k] = source[k];
    }
  }
  return destination;
}


var SmartWatch = function (){
  Watch.call(SmartWatch.prototype);
  Tablet.call(SmartWatch.prototype);

};

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;