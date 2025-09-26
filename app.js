// app.js - Lógica para criar e flipar cartões

// Função para criar um cartão com estrutura corrigida (duas faces)
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <!-- Face Frontal: Categoria + Pergunta -->
            <div class="cartao__face cartao__face--front">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <!-- Face Traseira: Resposta (com rotação compensatória no CSS) -->
            <div class="cartao__face cartao__face--back">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active'); // Toggle classe no .cartao para flip
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// Carrega dados de perguntas.js e cria cartões
document.addEventListener('DOMContentLoaded', () => {
    // Assume que perguntas é um array global de objetos {categoria, pergunta, resposta}
    perguntas.forEach(item => {
        criaCartao(item.categoria, item.pergunta, item.resposta);
    });
});