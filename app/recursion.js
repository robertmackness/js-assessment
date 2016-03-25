exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesArr = [];

    // Recursively search for correct subdirectory
    // Call recursive file search once directory hit
    // Default to root directory 'app'
    function dirSearch(obj, dir = 'app'){
      if (obj.dir == dir){
        recSearch(obj);
      }else if (obj.files){
        for(var i=0; i<obj.files.length; i++){
          if(typeof obj.files[i] == 'object'){
            dirSearch(obj.files[i], dir);
          }
        }
      }
    }
    // Recursively search for files
    function recSearch(object){
      if(object.files){
        for(var i=0; i < object.files.length; i++){
          if(typeof object.files[i] == 'string'){
            filesArr.push(object.files[i]);
          }else if (typeof object.files[i] == 'object'){
            recSearch(object.files[i]);
          }
        }
      }
    }
    // Produce results
    dirSearch(data, dirName);
    return filesArr;
  },

  permute: function(arr) {

    var results = [],
        temp    = [];

    function permute(a){
      var current;
      for(var i=0; i < a.length; i++){
        current = a.splice(i,1)[0];
        temp.push(current);
        if(temp.length == 4){
          results.push(temp.slice());
        }else{
          permute(a);
        }
        a.splice(i,0,current);
        temp.pop();
      }
      return results;
    }
    return permute(arr);
  },

  fibonacci: function(n) {
    function fib(n){
      if(n<=2){
          return 1; 
        } 
        else{
          return fib(n-2) + fib(n-1);
        } 
    }
    return fib(n);
  },

  validParentheses: function(n) {
    var baseArr = [];
    for(var i=0; i<n; i++){
      baseArr.unshift('(');
      baseArr.push(')');
    }
    var resultArr = []; 
    var tempArr = [];

    return paren(baseArr);

    function paren(arr){
      var current;
      for(var i=0; i<arr.length; i++){
        current = arr.splice(i,1)[0];
        tempArr.push(current);
        if(arr.length){
          paren(arr);
        }else{
          if(tempArr[0] != ")" && 
                tempArr[tempArr.length-1] != "(" && 
                    resultArr.indexOf(tempArr.slice().join('')) == -1 &&
                        sanitise(tempArr.slice().join(''))){
            resultArr.push(tempArr.slice().join(''));
          }
        }
        arr.splice(i,0,current);
        tempArr.pop();
      }
      return resultArr;
    }

    function sanitise(arr){
      var opens = 0;
      var closes = 0;
      for (var i=0; i<arr.length; i++){
        if(arr[i]=="("){
          opens++; 
        } else {
          closes++;
        }
        if(closes>opens) return false;
      }
      return true;
    }

  }
};
