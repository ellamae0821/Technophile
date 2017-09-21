
var Tablet = function (touch){
  this.touch = function (x,y) {
//    return {"x:"+ x + ", " + "y:"+ y};
    return {x:x, y:y};
  };
};


module.exports = Tablet;

