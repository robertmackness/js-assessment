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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
