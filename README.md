# 🧮 Calculadora Web Estilo iPhone

Uma calculadora web moderna e elegante inspirada no design do iPhone, desenvolvida com HTML, CSS e JavaScript puro.

![Calculadora](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> 💡 **Nota**: Este projeto começou como uma calculadora em C (`calculadora.c`) e evoluiu para uma aplicação web completa, demonstrando a progressão de conceitos de programação desktop para desenvolvimento web.

## ✨ Funcionalidades

### Operações Básicas
- ➕ Adição
- ➖ Subtração
- ✖️ Multiplicação
- ➗ Divisão
- 📊 Porcentagem

### Recursos Avançados
- 🎨 **Display Duplo**: Mostra a expressão e o resultado separadamente (estilo iPhone)
- 📝 **Histórico Clicável**: Salva os últimos 20 cálculos com modal animado
- 💾 **Persistência**: Histórico salvo no navegador (LocalStorage)
- ⌨️ **Suporte ao Teclado**: Use números, operadores, Enter, Backspace, Escape
- ✅ **Validações Inteligentes**: Previne erros como operadores duplicados ou múltiplos pontos
- 🎭 **Animações**: Ripple effect nos botões e transições suaves
- 📱 **Responsivo**: Funciona perfeitamente em dispositivos móveis

## 🚀 Como Usar

### Online
🔗 **[https://fahlula.github.io/calculadora/](https://fahlula.github.io/calculadora/)**

### Localmente
1. Clone o repositório:
```bash
git clone https://github.com/fahlula/calculadora.git
```

2. Abra o arquivo `index.html` no navegador

3. Comece a calcular! 🎉

## 🌐 Deploy no GitHub Pages

### Passo a Passo Completo

1. **Crie um repositório no GitHub**:
   - Acesse [github.com](https://github.com) e faça login
   - Clique no botão **"New"** (verde) para criar novo repositório
   - Nome sugerido: `calculadora`
   - Deixe como **público**
   - **NÃO** marque "Initialize with README" (já temos um)
   - Clique em **"Create repository"**

2. **Conecte seu projeto local ao GitHub**:
   ```bash
   # No terminal, dentro da pasta Calculadora:
   git remote add origin https://github.com/fahlula/calculadora.git
   git branch -M main
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   - No seu repositório no GitHub, clique em **"Settings"** (engrenagem)
   - No menu lateral esquerdo, clique em **"Pages"**
   - Em **"Source"**, selecione a branch **"main"**
   - A pasta deve ficar como **"/ (root)"**
   - Clique em **"Save"**
   - Aguarde 1-2 minutos ⏱️

4. **Acesse seu site online**:
   ```
   https://fahlula.github.io/calculadora/
   ```
   🎉 Sua calculadora está online!

### Atualizações Futuras

Sempre que fizer alterações no código:
```bash
git add .
git commit -m "descrição das alterações"
git push
```
O GitHub Pages atualiza automaticamente em 1-2 minutos!

## 🎮 Atalhos do Teclado

| Tecla | Ação |
|-------|------|
| `0-9` | Adicionar números |
| `+` `-` `*` `/` | Operações |
| `.` ou `,` | Ponto decimal |
| `Enter` | Calcular resultado |
| `Backspace` | Apagar último caractere |
| `Escape` ou `Delete` | Limpar tudo |
| `%` | Porcentagem |

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Grid Layout para botões
  - Animações com @keyframes
  - Transições suaves
  - Responsividade com Media Queries
- **JavaScript (ES6+)**:
  - Manipulação de DOM
  - Event Listeners
  - LocalStorage API
  - Validações complexas

## 📂 Estrutura do Projeto

```
calculadora/
├── index.html              # Estrutura principal
├── script.js              # Lógica da calculadora
├── calculadora.c          # Versão inicial em C (histórico)
├── CSS/
│   ├── base.css          # Estilos gerais
│   ├── calculadora.css   # Estilos da calculadora
│   └── historico.css     # Estilos do histórico
└── README.md             # Documentação
```

## 🎯 Funcionalidades Técnicas

### Validações Implementadas
- Impede operadores duplicados (`++`, `--`)
- Impede começar cálculo com operador
- Impede múltiplos pontos no mesmo número
- Limpa display automaticamente após calcular

### LocalStorage
```javascript
// Histórico persiste entre sessões
localStorage.setItem('calculadoraHistorico', JSON.stringify(historico));
```

### Animações CSS
- Ripple effect ao clicar nos botões
- Fade in ao carregar
- Transições suaves em hover

## 🌟 Destaques

- ✅ Código limpo e bem comentado
- ✅ Commits organizados e descritivos
- ✅ Arquitetura modular (CSS separado)
- ✅ Sem dependências externas
- ✅ Performance otimizada

## 📱 Responsividade

A calculadora se adapta perfeitamente a diferentes tamanhos de tela:
- 📱 Mobile: 320px+
- 📱 Tablet: 768px+
- 💻 Desktop: 1024px+

---

## 👩‍💻 Desenvolvido por

**Fabiana** | [@fahlula](https://github.com/fahlula)
