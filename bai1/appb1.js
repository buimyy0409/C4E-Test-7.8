function handleGetNumber() {
    let a = parseInt(document.getElementById("numberA").value);
    let b = parseInt(document.getElementById("numberB").value);

    let result = "";

    for (let i = a; i <= b; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            result += i + " ";
        }
        document.getElementById("result").innerHTML = "Các số chính phương trong khoảng từ a đến b: " + result;
    }

}