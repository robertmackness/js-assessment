exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction : function(str) {
    return function(str2){
      return str+", "+str2;
    }
  },

  makeClosures : function(arr, fn) {
    for(var i=0; i<arr.length; i++){
      arr[i] = function(){
        return fn(arr[i]);
      }
    }
    return arr;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function(){
      var args2 = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, args2);
    }
  },

  curryIt : function(fn) {
    return function(x){
      return function(y){
        return function(z){
          return fn(x,y,z);
        }
      }
    }
  }
};
