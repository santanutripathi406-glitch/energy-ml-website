function predict() {
    const temp = document.getElementById("temp").value;
    const load = document.getElementById("load").value;
    const voltage = document.getElementById("voltage").value;

    let riskValue = 10;
    let label = "LOW RISK";

    if (temp > 80 || load > 85 || voltage > 20) {
        riskValue = 90;
        label = "HIGH RISK";
    } else if (temp > 60 || load > 70 || voltage > 10) {
        riskValue = 50;
        label = "MEDIUM RISK";
    }

    document.getElementById("result").innerText = label;

    const ctx = document.getElementById("riskChart");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Failure Risk Level'],
            datasets: [{
                label: 'Risk %',
                data: [riskValue]
            }]
        }
    });
}
