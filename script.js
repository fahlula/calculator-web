function adicionarNumero(numero) {
    const display = document.getElementById('display');
    
    // Validação para o ponto decimal
    if (numero === '.') {
        const ultimoCaractere = display.value[display.value.length - 1];
        
        // Não permite ponto se último caractere já é ponto
        if (ultimoCaractere === '.') {
            return;
        }
        
        // Pega o número atual (após o último operador)
        const partes = display.value.split(/[\+\-\*\/]/); // Divide por operadores
        const numeroAtual = partes[partes.length - 1];
        
        // Não permite ponto se número atual já tem ponto
        if (numeroAtual.includes('.')) {
            return;
        }
    }
    
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

document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    if(tecla >= '0' && tecla <= '9') {
        adicionarNumero(tecla);
    }
    // Operadores
    else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        adicionarOperacao(tecla);
    } 
    // Ponto decimal
    else if (tecla === '.' || tecla === ',') {
        adicionarNumero('.');
    }

    // Enter para calcular
    else if (tecla === 'Enter') {
        calcular();
    }
    // Backspace = apagar último caractere
    else if (tecla === 'Backspace') {
        backspace();
    }
    
    // Escape ou Delete = limpar
    else if (tecla === 'Escape' || tecla === 'Delete') {
        limpar();
    }
    
    // % = porcentagem
    else if (tecla === '%') {
        porcentagem();
    }
});