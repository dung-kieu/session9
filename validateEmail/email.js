function checkZipCode(str) {
    let regex =/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    return regex.test(str);
}

let test1 = "acbde@a.com";
let test2 = "a@gmail.com";
let test3 = "@gail.com";
let test4 = "anh@gmail.";
let test5 = "@##Tha@gmail.com";
console.log(checkZipCode(test1));
console.log(checkZipCode(test2));
console.log(checkZipCode(test3));
console.log(checkZipCode(test4));
console.log(checkZipCode(test5));