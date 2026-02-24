function predict() {
    let temp = document.getElementById("temp").value;
    let load = document.getElementById("load").value;
    let voltage = document.getElementById("voltage").value;

    if(temp === "" || load === "" || voltage === "") {
        document.getElementById("result").innerText = "Please enter all values.";
        return;
    }

    // Simple demo logic (replace with real ML later)
    if(temp > 80 || load > 85 || voltage > 15) {
        document.getElementById("result").innerText = "⚠ HIGH FAILURE RISK";
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").innerText = "✅ LOW FAILURE RISK";
        document.getElementById("result").style.color = "green";
    }
}
