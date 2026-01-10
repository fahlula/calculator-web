function adicionarNumero(numero) {
    const display = document.getElementById('display'); // Obtém o elemento do display
    display.value = display.value + numero; 
}

function adicionarOperacao(operacao) {
    const display = document.getElementById('display');
    display.value = display.value + operacao;
}

function calcular() {
    const display = document.getElementById('display');
    try {
        // eval() avalia a expressão matemática em texto
        display.value = eval(display.value);
    } catch (erro) {
        // Se houver erro (expressão inválida), mostra "Erro"
        display.value = 'Erro';
    }
}

function limpar() {
    const display = document.getElementById('display');
    display.value = '';  // Define o valor como vazio
} 

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove o último caractere
}

function porcentagem(){
    const display = document.getElementById('display');
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100; // parseFloat converte texto em número decimal
    }
}