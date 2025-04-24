'user strict'

async function inserirDesenvolvedora(){
    const url = `http://localhost:3030/v1/controle-jogos/desenvolvedora`

    const data = {
        // Valor dos inputs no formulario
        "logo": "logo_ubisoft.png",
        "link": "www.ubisoft.com.br",
        "nome": "Ubisoft"
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
async function pesquisarDesenvolvedora() {
    const url = `http://localhost:3030/v1/controle-jogos/desenvolvedora`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.desenvolvedoras)
    return data.desenvolvedoras
}

// Fazer o GET de um jogo pelo ID
async function pesquisarDesenvolvedoraPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/desenvolvedora/${id}`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.desenvolvedoras)
    return data.desenvolvedoras
}

// Fazer o DELETE de um jogo pelo id
async function excluirUmaDesenvolvedoraPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/desenvolvedora/${id}`

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
async function atualizarDesenvolvedoraPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/desenvolvedora/${id}`

    const data = {
        // Valor dos inputs no formulario
        "logo": "logo_microsoft.png",
        "link": "www.microsoft.com.br",
        "nome": "microsoft"
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

excluirUmaDesenvolvedoraPorID(1)