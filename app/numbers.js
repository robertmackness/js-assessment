exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> bit-1)
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    var binary =  num.toString(2);
    while(binary.length < 8){
      binary = "0" + binary;
    }
    return binary;
  },

  multiply: function(a, b) {
    var multi = 1;
    while(a <= 1 || b <= 1){
      multi *= 10;
      a *= 10;
      b *= 10;
    }
    return (a*b)/(multi*multi);
  }
};
