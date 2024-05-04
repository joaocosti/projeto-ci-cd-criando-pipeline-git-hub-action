function calculateExponential() {
    const baseInput = document.getElementById("baseInput").value;
    const exponentInput = document.getElementById("exponentInput").value;
    const resultDiv = document.getElementById("result");

    // Verifica se os números inseridos são válidos
    if (baseInput === "" || isNaN(baseInput) || exponentInput === "" || isNaN(exponentInput)) {
        resultDiv.textContent = "Por favor, insira números válidos.";
        return;
    }

    // Calcula a exponencial
    const result = Math.pow(baseInput, exponentInput);

    // Exibe o resultado
    resultDiv.textContent = `${baseInput} elevado a ${exponentInput} é ${result}.`;
}
