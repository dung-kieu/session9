function checkZipCode(str) {
    let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regex.test(str);
}

let test1 = "03901-1295";
let test2 = "5678-12345";
let test3 = "03901-1295";
console.log(checkZipCode(test1));
console.log(checkZipCode(test2));
console.log(checkZipCode(test3));