function usarOperacao(callback) {

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const resultado = callback(num1, num2);

    document.getElementById("resultado").innerText = resultado;

}

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro (divisão por zero)";
    }
    return a / b;
};

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "0";
}