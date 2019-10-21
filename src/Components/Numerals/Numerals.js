const lib = {};

lib.symbol = {
  zero: '٠',
  one: '١',
  two: '٢',
  three: '٣',
  four: '٤',
  five: '٥',
  six: '٦',
  seven: '٧',
  eight: '٨',
  nine: '٩',
  decimalPoint: '٫'
};


lib.charCode = {
  zero: lib.symbol.zero.charCodeAt(),
  one: lib.symbol.one.charCodeAt(),
  two: lib.symbol.two.charCodeAt(),
  three: lib.symbol.three.charCodeAt(),
  four: lib.symbol.four.charCodeAt(),
  five: lib.symbol.five.charCodeAt(),
  six: lib.symbol.six.charCodeAt(),
  seven: lib.symbol.seven.charCodeAt(),
  eight: lib.symbol.eight.charCodeAt(),
  nine: lib.symbol.nine.charCodeAt(),
  decimalPoint: lib.symbol.decimalPoint.charCodeAt()
};

lib.seprationFromString = lib.symbol.zero.charCodeAt(0) - '0'.charCodeAt(0);
lib.seprationFromValue = lib.symbol.zero.charCodeAt(0);


module.exports = lib;