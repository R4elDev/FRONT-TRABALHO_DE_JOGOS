'use strict'

import { pesquisarJogos } from "./jogo.js"

function criarCard (jogo){
    const container = document.getElementById('containerCard')
    const card = document.createElement('div')
    card.classList.add('cardJogo')
    const imgJogo = document.createElement('div')
    imgJogo.classList.add('imgJogo')
    const h3Card = document.createElement('h3')
    const buttonCard = document.createElement('button')
    buttonCard.classList.add('button-see-more')

    imgJogo.style.background = `url('${jogo.foto_capa}')`
    h3Card.textContent = jogo.nome
    buttonCard.textContent = 'MAIS INFORMAÇÕES'

    card.appendChild(imgJogo)
    card.appendChild(h3Card)
    card.appendChild(buttonCard)
    container.appendChild(card)
}

async function exibirJogos(){
    const jogos = await pesquisarJogos()
    const containerJogos = document.getElementById('containerCard')
    containerJogos.replaceChildren('')
    
    jogos.forEach(criarCard)
}

// Fazer um endpoint que filtre por nome dos jogos


exibirJogos()