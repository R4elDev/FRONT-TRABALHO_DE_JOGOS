'user strict'

async function inserirGenero(){
    const url = `http://localhost:3030/v1/controle-jogos/genero`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_genero": "SandBox"
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

// Fazer o GET de TODOS os Generos
export async function pesquisarGenero() {
    const url = `http://localhost:3030/v1/controle-jogos/genero`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.generos)
    return data.generos
}

// Fazer o GET de um Genero pelo ID
export async function pesquisarGeneroPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`
    const response = await fetch(url)


    const data = await response.json()

    console.log(data.generos)
    return data.generos
}

// Fazer o DELETE de um Genero pelo id
async function excluirUmaGeneroPorID(id) {
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`

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

// Realizando o PUT em um Genero por ID
async function atualizarGeneroPorID(id){
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`

    const data = {
        // Valor dos inputs no formulario
        "tipo_de_genero": "Albion"
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


