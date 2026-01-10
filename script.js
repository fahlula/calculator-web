function adicionarNumero(numero) {
    const display = document.getElementById('display'); // Obtém o elemento do display
    display.value = display.value + numero; 
}

function adicionarOperacao(operacao){
    const display = document.getElementById('display');
    const ultimoCaractere = display.value[display.value.length - 1];

    // Lista de operadores
    const operadores = ['+', '-', '*', '/'];

    // Não adiciona se display vazio OU último caractere for um operador
    if(display.value === '' || operadores.includes(ultimoCaractere)){
        return; // Sai da função sem fazer nada 
    }
    display.value += operacao; // Adiciona o operador ao display
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

