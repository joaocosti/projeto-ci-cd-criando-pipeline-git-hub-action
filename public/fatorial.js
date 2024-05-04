function calculateFactorial() {
    const numberInput = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    // Verifica se o número inserido é válido
    if (numberInput === "" || isNaN(numberInput) || numberInput < 0) {
        resultDiv.textContent = "Por favor, insira um número válido.";
        return;
    }

    // Calcula o fatorial
    let factorial = 1;
    for (let i = 2; i <= numberInput; i++) {
        factorial *= i;
    }

    // Exibe o resultado
    resultDiv.textContent = `O fatorial de ${numberInput} é ${factorial}.`;
}
