/*Botões filtros*/

//array com nome das marcas
const marcas = gerarMarcas()

//Capitalizando nome das marcas
for(let i=0; i<marcas.length; i++){
    marcas[i] = marcas[i][0].toUpperCase() + marcas[i].substring(1)
}

//array com classes de configuração do botão
const classes = ['btnFiltro', 'btn', 'btn-outline-secondary', 'rounded-0', 'h-25', 'Ubuntu']


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

    //inseri botão no documento
    containerFiltro[0].appendChild(button)
}

/*Cards*/

//recebe promise
let data = gerarObjeto()

//funcão para fazer Card
function construirCarro(path, container){
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
    path.marca = path.marca.toLowerCase()
    path.marca = path.marca.charAt(0).toUpperCase() + path.marca.substring(1)

    //adiciona conteudo do objeto
    nomeMarca.innerHTML = path.marca
    tagMarca.setAttribute('src', './img/tagMarca.svg')
    imgCarro.setAttribute('src', path.imagem[0])
    nomeCarro.innerHTML = `${path.marca} ${path.modelo}`
    infoCarro.innerHTML = '2023 - USADO - Gasolina'
    precoCarro.innerHTML = `R$${path.preco}`
    separadorbtn.setAttribute('src', './img/Separador.svg')
    formBtn.setAttribute('action', 'comprarCarro.html')
    formBtn.setAttribute('method', 'get')
    btn.setAttribute('type', 'submit')
    btn.setAttribute('name', 'car')
    btn.setAttribute('value', `${path.marca.toLowerCase()} ${path.modelo}`)
    btn.innerHTML = 'Comprar'

    //Adiciona Classes
    card.classList.add('card')
    card.classList.add('BoxShadow')
    card.classList.add('shadow-lg')
    card.classList.add('rounded')
    card.classList.add('mt-5')

    nomeMarca.classList.add('tagMarca')
    nomeMarca.classList.add('textoMarca')
    nomeMarca.classList.add('Montserrat')
    nomeMarca.classList.add('text-center')
    nomeMarca.classList.add('align-middle')

    tagMarca.classList.add('tagMarca')

    imgCarro.classList.add('imgCarro')
    imgCarro.classList.add('card-img-top')
    imgCarro.classList.add('w-100')

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
    container.appendChild(card)
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
}

//define variavel para container dos cards
let containerCards = document.querySelector('.areaCards')

function gerarTodosCards(){
    //transforma promisse em objeto
    data.then((carros) => {

        for(let i=0; i<4; i++){
            switch(i){
                case 0: //lamborghini
                    for(let j=0; j<carros.lamborghini.length; j++){
                        construirCarro(carros.lamborghini[j], containerCards)
                    }    
                    break
                case 1: //ferrari
                    for(let j=0; j<carros.ferrari.length; j++){
                        construirCarro(carros.ferrari[j], containerCards)
                    } 
                    break
                case 2: //bmw
                    for(let j=0; j<carros.bmw.length; j++){
                        construirCarro(carros.bmw[j], containerCards)
                    } 
                    break
                case 3: //mercedes
                    for(let j=0; j<carros.mercedes.length - 1; j++){
                        construirCarro(carros.mercedes[j], containerCards)
                    } 
                    break
            }
        }
    })
}

//Chama função para criar cards
gerarTodosCards()

/*Busca do Filtro*/

//recebe botões
let arrayBtnFiltro = document.getElementsByClassName('btnFiltro')

//função apaga cards e refaz de acordo com a marca
function buscaFiltro(element, path, container, control=0){
    element.addEventListener('click', () => {
        container.innerHTML = ''
    
        for(let i=0; i<path.length - control; i++){
            construirCarro(path[i], container)
        }
    })
}

//adiciona eventos aos botões
for(let i=0; i<arrayBtnFiltro.length; i++){
    //transforma promise em objeto
    data.then((carros) => {
        //recebe elementos da busca
        const pBusca = document.getElementsByClassName('resBusca')
        const imgBusca = document.getElementsByClassName('imgBusca')

        switch(i){
            case 0:
                arrayBtnFiltro[i].addEventListener('click', () => {
                    containerCards.innerHTML = ''
                    pBusca[0].innerHTML = `Foram encontrados ${carros.lamborghini.length + carros.ferrari.length + carros.bmw.length + carros.mercedes.length} carros`
                    imgBusca[0].style.display = 'none'
                    gerarTodosCards()
                })
                break
            case 1: //lamborghini
                arrayBtnFiltro[i].addEventListener('click', () => {
                    pBusca[0].innerHTML = `Foram encontrados ${carros.lamborghini.length} carros`
                    imgBusca[0].setAttribute('src', './img/lamborghini/logo.png')
                    imgBusca[0].style.display = 'block'
                })
                buscaFiltro(arrayBtnFiltro[i], carros.lamborghini,containerCards)
                break
            case 2: //ferrari
                arrayBtnFiltro[i].addEventListener('click', () => {
                    pBusca[0].innerHTML = `Foram encontrados ${carros.ferrari.length} carros`
                    imgBusca[0].setAttribute('src', './img/ferrari/logo.png')
                    imgBusca[0].style.display = 'block'
                })
                buscaFiltro(arrayBtnFiltro[i], carros.ferrari,containerCards)
                break
            case 3: //bmw
                arrayBtnFiltro[i].addEventListener('click', () => {
                    pBusca[0].innerHTML = `Foram encontrados ${carros.bmw.length} carros`
                    imgBusca[0].setAttribute('src', './img/bmw/logo.png')
                    imgBusca[0].style.display = 'block'
                })
                buscaFiltro(arrayBtnFiltro[i], carros.bmw,containerCards)
                break
            case 4: //mercedes
                arrayBtnFiltro[i].addEventListener('click', () => {
                    pBusca[0].innerHTML = `Foram encontrados ${carros.mercedes.length} carros`
                    imgBusca[0].setAttribute('src', './img/mercedes/logo.png')
                    imgBusca[0].style.display = 'block'
                })
                buscaFiltro(arrayBtnFiltro[i], carros.mercedes,containerCards, 1)
                break
        }
    })
}
