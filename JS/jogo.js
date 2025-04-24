'user strict'


// Fazer um post de jogo
async function inserirJogo(){
    const url = `http://localhost:3030/v1/controle-jogos/jogo/`

    const data = {
        // Valor dos inputs no formulario


        "nome": "Mortal Kombat",
        "data_lancamento": "1985-09-13",
        "versao": "1.0",
        "tamanho": "500KB",
        "descricao": "Jogo bem legal para diversão",
        "foto_capa": "http://foto.jpg",
        "link": "http://downloadJogo.zip"
    }
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url,options)

    console.log(response)

    if(response.status == 201){
        alert('Postagem Criada')
    }
}

// Fazer o GET de TODOS os Jogos
async function pesquisarJogos() {
    const url = `http://localhost:3030/v1/controle-jogos/jogo`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.games)
    return data.games
}

// Fazer o GET de um jogo pelo ID
async function pesquisarJogoPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
    const response = await fetch(url)


    const data = await response.json()

    return data.games
}


async function excluirUmJogoPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`

    const options = {
        method : 'DELETE'
    }

    const response = await fetch(url,options)

    console.log(response)
    if(response.status == 200){
        alert('POSTAGEM DELETADA')
    }

    return response.ok
}

// Realizando o PUT em um jogo por ID
async function atualizarJogoPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`

    const data = {
        // Valor dos inputs no formulario
        "nome": "Mortal Kombat 3",
        "data_lancamento": "1985-09-13",
        "versao": "1.0",
        "tamanho": "500KB",
        "descricao": "Jogo bem legal para diversão",
        "foto_capa": "http://foto.jpg",
        "link": "http://downloadJogo.zip"
    }
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url,options)

    console.log(response)

    if(response.status == 201){
        alert('Postagem Atualizada')
    }
}






