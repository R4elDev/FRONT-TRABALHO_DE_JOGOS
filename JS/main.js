'use strict'

import { pesquisarJogos,pesquisarJogoPorID } from "./jogo.js"

function criarCard (jogo){
    const container = document.getElementById('containerCard')
    const card = document.createElement('div')
    card.classList.add('cardJogo')
    const imgJogo = document.createElement('div')
    imgJogo.classList.add('imgJogo')
    const h3Card = document.createElement('h3')
    const buttonCard = document.createElement('button')
    buttonCard.classList.add('button-see-more')
    buttonCard.id = jogo.id
    buttonCard.onclick = function (){
        exibirJogoSelecionadoPorId(this)
    }

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

async function exibirJogoSelecionadoPorId(botao){
   const idJogo = botao.id
   const base = await pesquisarJogoPorID(idJogo)
   const containerDetalhes = document.getElementById('maisDetalhes')
   containerDetalhes.style.visibility = 'visible'

   base.forEach(function(jogo){
        console.log(jogo)
        const divConteudoPrincipal = document.createElement('div')
        divConteudoPrincipal.classList.add('conteudoPrincipal')
        const contImage = document.createElement('div')
        contImage.classList.add('contImage')
        const divTextosSobre = document.createElement('div')
        divTextosSobre.classList.add('textosSobre')
        const nomeDesc = document.createElement('div')
        nomeDesc.classList.add('nomeDesc')
        const h1Desc = document.createElement('h1')
        const p1Desc = document.createElement('p')
        const divInformacoesDetalhadas = document.createElement('div')
        divInformacoesDetalhadas.classList.add('informacoesDetalhadas')

        const contInfoDetalhadaLancamento = document.createElement('div')
        contInfoDetalhadaLancamento.classList.add('contInfoDetalhada')
        const h2Lancamento = document.createElement('h2')
        const h3Lancamento = document.createElement('h3')

        const contInfoDetalhadaVersao = document.createElement('div')
        contInfoDetalhadaVersao.classList.add('contInfoDetalhada')
        const h2Versao = document.createElement('h2')
        const h3Versao = document.createElement('h3')

        const contInfoDetalhadaTamanho = document.createElement('div')
        contInfoDetalhadaTamanho.classList.add('contInfoDetalhada')
        const h2Tamanho = document.createElement('h2')
        const h3Tamanho = document.createElement('h3')

        const contInfoDetalhadaClassificacao = document.createElement('div')
        contInfoDetalhadaClassificacao.classList.add('contInfoDetalhada')
        const h2Classificacao = document.createElement('h2')
        const h3Classificacao = document.createElement('h3')

        const contInfoDetalhadaPlataforma = document.createElement('div')
        contInfoDetalhadaPlataforma.classList.add('contInfoDetalhada')
        const h2Plataforma = document.createElement('h2')
        const h3Plataforma = document.createElement('h3')

        const contInfoDetalhadaGeneros = document.createElement('div')
        contInfoDetalhadaGeneros.classList.add('contInfoDetalhada')
        const h2Generos = document.createElement('h2')
        const h3Generos = document.createElement('h3')

        const contInfoDetalhadaDesenvolvedora = document.createElement('div')
        contInfoDetalhadaDesenvolvedora.classList.add('contInfoDetalhada')
        const h2Desenvolvedora = document.createElement('h2')
        const h3Desenvolvedora = document.createElement('h3')

        const divIconesMaisDetalhes = document.createElement('div')
        divIconesMaisDetalhes.classList.add('iconesMaisDetalhes')
        const imgLapis = document.createElement('img')
        imgLapis.classList.add('icones')
        imgLapis.src = '../img/lapisEditar.png'

        const imgExcluir = document.createElement('img')
        imgExcluir.classList.add('icones')
        imgExcluir.src = '../img/lixeiraRemove.png'




        contImage.style.backgroundImage = `url(${jogo.foto_capa})`

        h1Desc.textContent = jogo.nome
        p1Desc.textContent = jogo.descricao

        h2Lancamento.textContent = 'Lançamento:'
        h3Lancamento.textContent = jogo.data_lancamento

        h2Versao.textContent = 'Versão:'
        h3Versao.textContent = jogo.versao

        h2Tamanho.textContent = 'Tamanho:'
        h3Tamanho.textContent = jogo.tamanho

        h2Classificacao.textContent = 'Classificacão:'
        jogo.classificacao.forEach(function(classificacao){
            h3Classificacao.textContent = classificacao.tipo_de_classificacao
        })

        h2Plataforma.textContent = 'Plataforma:'
        jogo.plataformas.forEach(function(plataforma){
            h3Plataforma.textContent = plataforma.tipo_de_plataforma
        })

        h2Generos.textContent = 'Gêneros:'
        jogo.generos.forEach(function(generos){
            h3Generos.textContent = generos.tipo_de_genero
        })

        h2Desenvolvedora.textContent = 'Desenvolvedoras:'
        jogo.desenvolvedoras.forEach(function(desenvolvedoras){
            h3Desenvolvedora.textContent = desenvolvedoras.nome
        })
        containerDetalhes.appendChild(divConteudoPrincipal)
        
        divIconesMaisDetalhes.appendChild(imgLapis)
        divIconesMaisDetalhes.appendChild(imgExcluir)
        containerDetalhes.appendChild(divIconesMaisDetalhes)

        divConteudoPrincipal.appendChild(contImage)
        divConteudoPrincipal.appendChild(divTextosSobre)
        divTextosSobre.appendChild(nomeDesc)
        nomeDesc.appendChild(h1Desc)
        nomeDesc.appendChild(p1Desc)

        divTextosSobre.appendChild(divInformacoesDetalhadas)

        divInformacoesDetalhadas.appendChild(contInfoDetalhadaLancamento)
        contInfoDetalhadaLancamento.appendChild(h2Lancamento)
        contInfoDetalhadaLancamento.appendChild(h3Lancamento)
        
        contInfoDetalhadaVersao.appendChild(h2Versao)
        contInfoDetalhadaVersao.appendChild(h3Versao)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaVersao)

        contInfoDetalhadaTamanho.appendChild(h2Tamanho)
        contInfoDetalhadaTamanho.appendChild(h3Tamanho)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaTamanho)

        contInfoDetalhadaClassificacao.appendChild(h2Classificacao)
        contInfoDetalhadaClassificacao.appendChild(h3Classificacao)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaClassificacao)

        contInfoDetalhadaPlataforma.appendChild(h2Plataforma)
        contInfoDetalhadaPlataforma.appendChild(h3Plataforma)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaPlataforma)

        contInfoDetalhadaGeneros.appendChild(h2Generos)
        contInfoDetalhadaGeneros.appendChild(h3Generos)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaGeneros)

        contInfoDetalhadaDesenvolvedora.appendChild(h2Desenvolvedora)
        contInfoDetalhadaDesenvolvedora.appendChild(h3Desenvolvedora)
        divInformacoesDetalhadas.appendChild(contInfoDetalhadaDesenvolvedora)

   })

   
}

// Fazer um endpoint que filtre por nome dos jogos

document.getElementById('close').addEventListener('click',() =>{
    const contMaisDetalhes = document.getElementById('maisDetalhes').style.visibility = 'hidden'
    const containerMaisDetalhesJogos = document.getElementById('maisDetalhes')
})
exibirJogos()
