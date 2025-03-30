import { formatCurrency } from "../scripts/utils/money";
// test suite name

console.log('test suite: format currency');

// test name 
console.log('coverts cents to dollars');
if(formatCurrency(2095) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

if(formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
}