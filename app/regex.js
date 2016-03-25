exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return !!str.match(/[0-9]/);
  },

  containsRepeatingLetter : function(str) {
    return !!str.match(/([a-zA-Z])\1{1,}/);
  },

  endsWithVowel : function(str) {
    return !!str.match(/[aeiouAEIOU]$/);
  },

  captureThreeNumbers : function(str) {
    var result = str.match(/\d{3}/);
    if(result) return result[0];
    else return false;
  },

  matchesPattern : function(str) {
    return !!str.match(/^\d{3}\-\d{3}\-\d{4}$/);
  },
  isUSD : function(str) {
    return !!str.match(/^\$(\d{1,3})+(,\d{3})*(\.\d{2})?$/);
  }
};
