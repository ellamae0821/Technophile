
var WebBrowser = function (open){
  this.open = function (url) {
    return "Browsing to " + url;
  };
};


module.exports = WebBrowser;
