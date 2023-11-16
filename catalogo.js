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
const containerFiltro = document.getElementsByClassName('containerBtnFiltro')

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
    containerFiltro[0].appendChild(button)
}

/*Cards*/

//recebe promise
let data = gerarObjeto()

//transforma promisse em objeto
data.then((carros) => {
    //recebe div pai
    const containerCards = document.querySelector('.areaCards')

    //cria elementos
    const card = document.createElement('div')
    const nomeMarca = document.createElement('p')
    const tagMarca = document.createElement('img')
    const imgCarro = document.createElement('img')
    const areaTextos = document.createElement('div')
    const nomeCarro = document.createElement('h3')
    const infoCarro = document.createElement('p')
    const precoCarro = document.createElement('h1')
    const areaBtn = document.createElement('div')
    const separadorbtn = document.createElement('img')
    const formBtn = document.createElement('form')
    const btn = document.createElement('button')

    //capitalização
    carros.lamborghini[0].marca = carros.lamborghini[0].marca.toLowerCase()
    carros.lamborghini[0].marca = carros.lamborghini[0].marca.charAt(0).toUpperCase() + carros.lamborghini[0].marca.substring(1)

    //adiciona conteudo do objeto
    nomeMarca.innerHTML = carros.lamborghini[0].marca
    tagMarca.setAttribute('src', './img/tagMarca.svg')
    imgCarro.setAttribute('src', carros.lamborghini[0].imagem[0])
    nomeCarro.innerHTML = `${carros.lamborghini[0].marca} ${carros.lamborghini[0].modelo}`
    infoCarro.innerHTML = '2023 - USADO - Gasolina'
    precoCarro.innerHTML = `R$${carros.lamborghini[0].preco}`
    separadorbtn.setAttribute('src', './img/Separador.svg')
    formBtn.setAttribute('action', 'comprarCarro.html')
    formBtn.setAttribute('method', 'get')
    btn.setAttribute('type', 'submit')
    btn.setAttribute('name', 'model')
    btn.setAttribute('value', carros.lamborghini[0].modelo)
    btn.innerHTML = 'Comprar'

    //Adiciona Classes
    card.classList.add('card')
    card.classList.add('BoxShadow')
    card.classList.add('shadow-lg')
    card.classList.add('rounded')
    card.classList.add('w-100')
    card.classList.add('mt-5')

    nomeMarca.classList.add('tagMarca')
    nomeMarca.classList.add('textoMarca')
    nomeMarca.classList.add('Montserrat')
    nomeMarca.classList.add('text-center')
    nomeMarca.classList.add('align-middle')

    tagMarca.classList.add('tagMarca')

    imgCarro.classList.add('imgCarro')
    imgCarro.classList.add('card-img-top')

    areaTextos.classList.add('textoCard')
    areaTextos.classList.add('card-body')
    areaTextos.classList.add('m-0')
    areaTextos.classList.add('p-0')

    nomeCarro.classList.add('card-text')
    nomeCarro.classList.add('nomeCarro')
    nomeCarro.classList.add('Ubuntu')
    nomeCarro.classList.add('w-100')
    nomeCarro.classList.add('text-center')
    nomeCarro.classList.add('p-1')

    infoCarro.classList.add('card-text')
    infoCarro.classList.add('infoCarro')
    infoCarro.classList.add('Ubuntu')
    infoCarro.classList.add('w-100')
    infoCarro.classList.add('text-center')
    infoCarro.classList.add('h-auto')
    infoCarro.classList.add('mt-0')

    precoCarro.classList.add('card-text')
    precoCarro.classList.add('precoCarro')
    precoCarro.classList.add('w-100')
    precoCarro.classList.add('text-center')
    precoCarro.classList.add('mb-1')
    precoCarro.classList.add('mt-0')

    areaBtn.classList.add('m-0')
    areaBtn.classList.add('p-0')
    areaBtn.classList.add('h-100')

    separadorbtn.classList.add('separador')
    separadorbtn.classList.add('w-100')
    separadorbtn.classList.add('p-0')
    separadorbtn.classList.add('h-auto')

    formBtn.classList.add('formulario')
    formBtn.classList.add('h-25')
    formBtn.classList.add('mt-0')
    formBtn.classList.add('p-0')

    btn.classList.add('btnForm')
    btn.classList.add('w-100')
    btn.classList.add('m-0')
    btn.classList.add('p-0')
    btn.classList.add('h-100')
    btn.classList.add('rounded-bottom')
    btn.classList.add('border-0')
    btn.classList.add('Ubuntu')

    //Adiciona no documento
    containerCards.appendChild(card)
    card.appendChild(tagMarca)
    card.appendChild(nomeMarca)
    card.appendChild(imgCarro)
    card.appendChild(areaTextos)
    areaTextos.appendChild(nomeCarro)
    areaTextos.appendChild(infoCarro)
    areaTextos.appendChild(precoCarro)
    areaTextos.appendChild(areaBtn)
    areaBtn.appendChild(separadorbtn)
    areaBtn.appendChild(formBtn)
    formBtn.appendChild(btn)
})
