exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var p1 = new Promise(
      function(resolve, reject){
        window.setTimeout(
          function(){
            resolve(value);
          }, 1000);
      }
    );
    return p1;
  },

  manipulateRemoteData : function(url) {
    var xmlhttp = new XMLHttpRequest();
    return {
      then: function(callback){
        xmlhttp.onreadystatechange = function(){
          if(xmlhttp.readyState == 4 && xmlhttp.status >= 200 && xmlhttp.status < 400){
            var result = JSON.parse(xmlhttp.responseText);
            var names = result["people"].map(function(item){
              return item["name"];
            }).sort();
            return callback(names);
          }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      }
    }
  } // manipulateRemoteData
};
