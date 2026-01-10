// Array para armazenar histórico
let historico = carregarHistorico();
let acabouDeCalcular = false; // Flag para limpar display após calcular

// Carrega histórico do localStorage
function carregarHistorico() {
    const salvo = localStorage.getItem('calculadoraHistorico');
    return salvo ? JSON.parse(salvo) : [];
}

// Salva histórico no localStorage
function salvarHistorico() {
    localStorage.setItem('calculadoraHistorico', JSON.stringify(historico));
}

function adicionarNumero(numero) {
    const display = document.getElementById('display');
    
    // Se acabou de calcular, limpa display para novo cálculo
    if (acabouDeCalcular) {
        display.value = '';
        document.getElementById('expressao').textContent = '';
        acabouDeCalcular = false;
    }
    
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
    const expressaoDisplay = document.getElementById('expressao');

    try {
        // Salva a expressão antes de calcular
        const expressao = display.value;
        
        // eval() avalia a expressão matemática em texto
        const resultado = eval(expressao);
        
        // Adiciona ao histórico
        historico.push({
            expressao: expressao,
            resultado: resultado,
            data: new Date()
        });
        
        // Mantém apenas os últimos 20 cálculos
        if (historico.length > 20) {
            historico.shift(); // Remove o primeiro (mais antigo)
        }
        
        // Salva no localStorage
        salvarHistorico();
        
        // Atualiza lista se modal estiver aberto
        if (document.getElementById('modal-historico').classList.contains('ativo')) {
            atualizarHistorico();
        }
        
        // Mostra a expressão em cima e o resultado embaixo
        expressaoDisplay.textContent = expressao;
        display.value = resultado;
        
        acabouDeCalcular = true; // Marca que acabou de calcular
        
    } catch (erro) {
        // Se houver erro (expressão inválida), mostra "Erro"
        display.value = 'Erro';
        expressaoDisplay.textContent = '';
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

// ========== FUNÇÕES DO HISTÓRICO ==========

function abrirHistorico() {
    const modal = document.getElementById('modal-historico');
    modal.classList.add('ativo');
    atualizarHistorico();
}

function fecharHistorico() {
    const modal = document.getElementById('modal-historico');
    modal.classList.remove('ativo');
}

function atualizarHistorico() {
    const lista = document.getElementById('lista-historico');
    
    if (historico.length === 0) {
        lista.innerHTML = '<p class="historico-vazio">Nenhum cálculo ainda</p>';
        return;
    }
    
    lista.innerHTML = '';
    
    // Mostra os últimos 10 cálculos (mais recente primeiro)
    const ultimos = historico.slice(-10).reverse();
    
    ultimos.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-historico';
        div.onclick = () => carregarCalculo(item.resultado);
        
        div.innerHTML = `
            <div class="expressao">${item.expressao}</div>
            <div class="resultado">${item.resultado}</div>
        `;
        
        lista.appendChild(div);
    });
}

function carregarCalculo(resultado) {
    const display = document.getElementById('display');
    const expressaoDisplay = document.getElementById('expressao');
    
    display.value = resultado;
    expressaoDisplay.textContent = '';
    
    fecharHistorico();
}