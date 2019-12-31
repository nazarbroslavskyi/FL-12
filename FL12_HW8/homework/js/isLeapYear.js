const isLeapYear = dateStr => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const helperNumbers = new Map([
      ['4', 4],
      ['100', 100],
      ['400', 400]
    ]);
    const zero = 0;
  
    if (!year) {
      console.log('Invalid Date');
      return;
    }
  
    const isLeapYear =
      year % helperNumbers.get('4') === zero
        ? year % helperNumbers.get('100') !== zero
        : year % helperNumbers.get('400') === zero;
  
    return isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`;
  };
  
  isLeapYear('2020-01-01 00:00:00'); // =>  ‘2020 is a leap year’
  isLeapYear('2020-01-01 00:00:00777'); // =>  ‘Invalid Date’
  isLeapYear('2021-01-15 13:00:00'); // =>  ‘2021 is not a leap year’
  isLeapYear('2200-01-15 13:00:00'); // =>  ‘2200 is not a leap year’
  isLeapYear(1213131313135465656654564646542132132131); // =>  ‘Invalid Date’
  isLeapYear(1213131313); // => ‘1970 is not a leap year’