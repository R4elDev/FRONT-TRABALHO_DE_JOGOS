'user strict'

async function InserirJogo(jogo){
    const url = `http://localhost:3030/v1/controle-jogos/jogo/`
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            jogo
        )
    }

    

    return data
}


const novoJogo {
    // Passar aq o Json da Requisição 
}