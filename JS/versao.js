'user strict'

async function inserirVersao(){
    const url = `http://localhost:3030/v1/controle-jogos/versao`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_versao": "1.11"
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

// Fazer o GET de TODOS as plataformas
async function pesquisarVersao() {
    const url = `http://localhost:3030/v1/controle-jogos/versao`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.versao)
    return data.versao

}

// Fazer o GET de uma Plataforma pelo ID
async function pesquisarVersaoPorId(id) {
    const url = `http://localhost:3030/v1/controle-jogos/versao/${id}`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.versao)
    
    return data.versao
}

// Fazer o DELETE de uma Plataforma pelo id
async function excluirUmaVersaoPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/versao/${id}`

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

// Realizando o PUT em uma Plataforma por ID
async function atualizarVersaoPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/versao/${id}`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_versao": "1.14"
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

    if(response.status == 200){
        alert('Postagem Atualizada')
    }
}
