const botoes = document.querySelectorAll(".carrosel_botao");
const cards = document.querySelectorAll(".carrosel_cards > div:not(.carrosel_botao)");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.remove("carrosel_card_desativo");
                card.classList.add("carrosel_card_ativo");
            } else {
                card.classList.remove("carrosel_card_ativo");
                card.classList.add("carrosel_card_desativo");
            }
        });
    });
});


const botoesSaibaMais = document.querySelectorAll('.botãosaibamais');
const sectionCards = document.querySelector('.cardscasos');
const sectionCasos = document.querySelector('.casos_acontecidos');
const botaoVoltar = document.querySelector('.botãovoltar');
const sectionVideoconst = document.querySelector('.sectionvideo')
const finalizacao = document.querySelector('.finalizacao_explicativas')

botoesSaibaMais.forEach(botao => {
    botao.addEventListener('click', () => {
        sectionVideoconst.style.display = 'none'
        finalizacao.style.display = 'none'
        sectionCards.style.display = 'none';
        sectionCasos.style.display = 'block';
    });
});

    botaoVoltar.addEventListener('click', () => {
    sectionCasos.style.display = 'none';
    sectionCards.style.display = 'flex'; 
    sectionVideoconst.style.display = 'block';
    finalizacao.style.display = 'block';
});