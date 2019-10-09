function check(str) {
    let regex =/^[_a-z0-9]{6,}$/;
    return regex.test(str);
}

let test1 = "123abc_";
let test2 = "_abc123";
let test3 = "______";
let test4 = "123456";
let test5 = "abcdefg";
let test6 = " .@";
let test7 = "12345";
let test8 = "1234_";
let test9 = "abcde ";

console.log(check(test1));
console.log(check(test2));
console.log(check(test3));
console.log(check(test4));
console.log(check(test5));
console.log(check(test6));
console.log(check(test7));
console.log(check(test8));
console.log(check(test9));
