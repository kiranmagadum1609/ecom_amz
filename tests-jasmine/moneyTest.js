import {formatCurrency} from "../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('coverst cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00')
  })

  it('round up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01')
  })
});

// to create a test suite in Jasmine we use keyword called describe
//test suite means the group of related test cases
// describe('test suite: formatCurrency', () => {
  // create a test in jasmine: it()
  // it('coverst cents into dollars', () => {
    //expect() lets us compare a value with another value
    // if(formatCurrency(2095) === '0.00'){
    //   console.log('passed');
    // }else{
    //   console.log('failed');
    // }

    //Above code is written a single line
    //expect is an object that provides methods that can be used for testing purpose
    // expect(formatCurrency(2095)).toEqual('20.95');
  // });
// });


// if(formatCurrency(0) === '0.00'){
//   console.log('passed');
// }else{
//   console.log('failed');
// }

// if(formatCurrency(2000.5) === '20.01'){
//   console.log('passed');
// }else{
//   console.log('failed');
// }