

var Phone = function (phoneNumber){
  this.phoneNumber =phoneNumber;
};

Phone.prototype.callPhone = function (phoneNumber){
  return this.phoneNumber + " calls " + phoneNumber;
};

module.exports = Phone;
