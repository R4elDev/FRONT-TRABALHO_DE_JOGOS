'user strict'

async function inserirPlataforma(){
    const url = `http://localhost:3030/v1/contole-jogos/plataforma`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_plataforma": "PS4",
        "logo": "ps4_logo.jpeg"
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
async function pesquisarPlataforma() {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.plataforma)
    return data.plataforma

}

// Fazer o GET de uma Plataforma pelo ID
async function pesquisarPlataformaPorId(id) {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.plataforma)
    
    return data.plataforma
}

// Fazer o DELETE de uma Plataforma pelo id
async function excluirUmaPlataformaPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}`

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
async function atualizarPlataformaPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_plataforma": "PS5",
        "logo": "ps5_logo.jpeg"
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




