// nhập vào 3 số, in ra số lớn nhất và nhỏ nhất ( sử dụng toán ba ngôi)
let a = Number (prompt(" nhập vào số thứ nhất"));
let b = Number (prompt(" nhập vào số thứ hai "));
let c = Number (prompt(" nhập vào số thứ ba"));
let max = (a>b) ? ((a>c) ? a:c) : ((b>c) ? b:c);
let min = (a<b) ? ((a<c) ? a:c) : ((b<c) ? b:c);
console.log(' giá trị lớn nhất là:' +max);
console.log(' giá trị nhỏ nhất là:' +min);
