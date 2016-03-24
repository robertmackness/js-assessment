exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    var func = fn.bind(obj);
    return func();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [];
    for (key in obj){
      if(obj.hasOwnProperty(key)){
        result.push(key+": "+obj[key]);
      }
    }
    return result;
  } 
};
