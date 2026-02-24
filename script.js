let riskChart = null;

function predict() {
    const temp = Number(document.getElementById("temp").value);
    const load = Number(document.getElementById("load").value);
    const voltage = Number(document.getElementById("voltage").value);

    let riskValue = 10;
    let label = "LOW RISK";
    let color = "green";
    let accuracy = "Prediction Confidence: 92%";

    if (temp > 80 || load > 85 || voltage > 20) {
        riskValue = 90;
        label = "HIGH RISK";
        color = "red";
        accuracy = "Prediction Confidence: 96%";
    } 
    else if (temp > 60 || load > 70 || voltage > 10) {
        riskValue = 50;
        label = "MEDIUM RISK";
        color = "orange";
        accuracy = "Prediction Confidence: 94%";
    }

    document.getElementById("result").innerText = label;
    document.getElementById("accuracy").innerText = accuracy;

    const ctx = document.getElementById("riskChart");

    if (riskChart) {
        riskChart.destroy();
    }

    riskChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Failure Risk Level'],
            datasets: [{
                label: 'Risk %',
                data: [riskValue],
                backgroundColor: color
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function resetForm() {
    document.getElementById("temp").value = "";
    document.getElementById("load").value = "";
    document.getElementById("voltage").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("accuracy").innerText = "";

    if (riskChart) {
        riskChart.destroy();
    }
}
