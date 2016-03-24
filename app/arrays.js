exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0; i<arr.length; i++){
      if(arr[i] === item) return i;
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(var i=arr.length; i>=0; i--){
      if(arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i=arr.length; i>=0; i--){
      if(arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.length += 1;
    for(var i = arr.length-2; i>=index; i--){
      arr[i+1] = arr[i];
    }
    arr[index] = item;
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i=0; i < arr.length; i++){
      if(arr[i] === item) count++;
    }
    return count;
  },

  duplicates : function(arr) {
   
   // This approach is significantly slower than using a hashmap sieve
   // However hashmap keys are coerced into a string, causing issues
   // if the array contains primitives and objects other than strings.
   var dupes = [];
    arr.sort();
    for(var i = arr.length-1; i>0; i--){
      if(arr[i] === arr[i-1] && dupes.indexOf(arr[i]) == -1){
        dupes.push(arr[i]);
      }
    }
    return dupes;
  },

  square : function(arr) {
    for(var i=0; i < arr.length; i++){
      arr[i] = arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    targetIndexes = [];
    for(var i=0; i < arr.length; i++){
      if(arr[i] == target){
        targetIndexes.push(i);
      }
    }
    return targetIndexes;
  }
};
