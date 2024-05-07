function calculate() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = parseFloat(document.getElementById("z").value);
    const c = parseFloat(document.getElementById("c").value);

    if (!isNaN(x) && !isNaN(y) && !isNaN(z) && !isNaN(c)) {
        const result = ((x * y) / (z + c));
        if (result !== 0) {
            const roundedResult = Math.round(result * 10) / 10;
            document.getElementById("result").textContent = roundedResult + "%";
        } else {
            document.getElementById("result").textContent = "0%";
        }
    } else {
        document.getElementById("result").textContent = "Маълумотлар нотўғри киритилган!";
    }
}

document.getElementById("x").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("y").focus();
    }
});

document.getElementById("y").addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        document.getElementById("z").focus();
    }
});

document.getElementById("z").addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        document.getElementById("c").focus();
    }
});

document.getElementById("c").addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        calculate();
    }
});
