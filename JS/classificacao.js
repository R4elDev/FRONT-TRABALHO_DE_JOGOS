'user strict'

async function inserirClassificacao(){
    const url = `http://localhost:3030/v1/controle-jogos/classificacao`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_classificacao": "L"
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
async function pesquisarClassificacoes() {
    const url = `http://localhost:3030/v1/controle-jogos/classificacao`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.classificacoes)
    return data.classificacoes
}

// Fazer o GET de um jogo pelo ID
async function pesquisarClassificacaoPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/classificacao/${id}`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.classificacoes)
    return data.classificacoes
}

// Fazer o DELETE de um jogo pelo id
async function excluirUmaClassificacaoPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/classificacao/${id}`

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
async function atualizarClassificacaoPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/classificacao/${id}`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_classificacao": "+18"
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
