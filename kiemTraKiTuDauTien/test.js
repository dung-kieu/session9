function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("String'is first character is uppercase");
    }else {
        console.log("String'is first character is not uppercase");
    }
}

isFirstLetterUpperCase("Nguyen van Nam");
isFirstLetterUpperCase("NGUYEN VAN NAM");
isFirstLetterUpperCase("nguyen van nam");