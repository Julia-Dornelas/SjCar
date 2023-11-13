/*Botões filtros*/

//array com nome das marcas
const marcas = gerarMarcas()

//Capitalizando nome das marcas
for(let i=0; i<marcas.length; i++){
        marcas[i] = marcas[i][0].toUpperCase() + marcas[i].substring(1)
}

//array com classes de configuração do botão
const classes = ['btn', 'btn-outline-secondary', 'rounded-0', 'h-25', 'Ubuntu']


//div pai
const container = document.getElementsByClassName('containerBtnFiltro')

//cria botão
for(let i=0; i<marcas.length; i++){
    const button = document.createElement('button')

    //muda conteudo do botão
    button.innerHTML = marcas[i]

    //Coloca classes
    for(let j=0; j<classes.length; j++){
        button.classList.add(classes[j])
    }

    //Define tamanho do botão
    button.style.width = '47%'

    //inseri botão no documento
    container[0].appendChild(button)
}