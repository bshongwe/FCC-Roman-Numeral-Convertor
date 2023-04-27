function convertToRoman(num) {
  
  // Conversion numeric table
  const romanNumerals = [
    {value: 1000, symbol: 'M'},
    {value: 900, symbol: 'CM'},
    {value: 500, symbol: 'D'},
    {value: 400, symbol: 'CD'},
    {value: 100, symbol: 'C'},
    {value: 90, symbol: 'XC'},
    {value: 50, symbol: 'L'},
    {value: 40, symbol: 'XL'},
    {value: 10, symbol: 'X'},
    {value: 9, symbol: 'IX'},
    {value: 5, symbol: 'V'},
    {value: 4, symbol: 'IV'},
    {value: 1, symbol: 'I'},
  ];

// Conversion formula
  let roman = '';
  
  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      roman += numeral.symbol;
      num -= numeral.value;
    }
  };
  
  return roman;
}

console.log(convertToRoman(36))
