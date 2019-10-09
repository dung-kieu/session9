let result = document.getElementById("result");

function check() {
    let regex = /^[ACP][0-9]{4}[GHIKLM]$/;
    let input = document.getElementById("tex");
    if (regex.test(input.value)){
        result.innerText ="Valid";
    }else {
        result.innerText = "Invalid";
    }
    input.focus();
}