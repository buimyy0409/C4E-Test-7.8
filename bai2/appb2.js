function handleGetRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function handlePickRandomColor() {
    const randomColor = handleGetRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-picker").textContent = randomColor;
    document.getElementById("color-picker").style.color = randomColor;
    document.getElementById("gradient").style.backgroundImage = "linear-gradient(to right, " + randomColor + ", yellow)";
    document.getElementById("copyInput").value = randomColor;
}

function handleCopyColor() {
    const copyText = document.getElementById("copyInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copyBtn");
    alert("Hex Copied!: " + copyText.value);
}