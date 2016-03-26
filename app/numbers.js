exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (1 & (num >> bit-1));

    // the bitwise & operator returns a 1 in positions that both
    // evaluated arguments contain a 1. In this case the following
    // is evaluated:
    // 00000001 & num(shifted to the right by so many bits)
    // so if we had the number 4 as num and wanted to know if bit 3 was 1
    // or 0, the following takes places
    // 00000001 & (00000100 shifted 3-1 bits (we don't want to shift the evaluated bit off)
    // 00000001 & 00000001 or more clearly 00000001
    //                                     00000001
    //                                  =  00000001  returns 1
    // If we shifted it 3-2 bits we'd get  00000001
    //                                     00000010
    //                                  =  00000000  returns 0

  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    
    var binary = [];
    for(var i = 0; i<8; i++){
      binary.unshift(1 & (num >> i));
    }
    return binary.join('');
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
