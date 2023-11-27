/*recebe informações da página de catalogo*/

//função que gera carro na pagina
function gerarCarro(img, model, make, price){
    //recebe elementos do documento
    const imgSlide = document.getElementsByClassName('imgSlide')
    const textoMarca = document.getElementsByClassName('textoMarca')
    const textoModelo = document.getElementsByClassName('textoModelo')
    const textoPreco = document.getElementsByClassName('textoPreco')
    
    //muda conteudo dos elementos
    imgSlide[0].setAttribute('src', img[0])
    imgSlide[1].setAttribute('src', img[1])
    imgSlide[0].setAttribute('alt', model)
    imgSlide[1].setAttribute('alt', model)

    textoMarca[0].innerHTML = make
    textoModelo[0].innerHTML = model

    textoPreco[0].innerHTML = `R$${price}`
}

//recebe url
let fullurl = window.location.href

//verifica se é de colecionador ou atual
let isColecionador = fullurl.includes('%26')

if(!isColecionador){ //não é de colecionador
    let param = ''

    //recebe parametros
    for(let i=0; i<fullurl.length; i++){
        if(fullurl[i] === '?'){
            param = fullurl.substring(i+1).replace('+', ' ')
        }
    }

    //recebe marca e modelo do carro
    let car = param.substring(4)
    let marca = ''
    let modelo = ''

    //verifica onde está espaço na string
    for(let i=0; i<car.length; i++){
        if(car[i] === ' '){
            //divide informações
            marca = car.slice(0, i)
            modelo = car.slice(i+1).replace('+', ' ').replace('+', ' ').replace('%2', '')
        }
    }

    //muda title da pagina
    document.title = modelo

    /*recebe dados do carro*/
    let dados = gerarObjeto()

    dados.then((carros) => {
        //variaveis para guardar info do carro selecionado
        let preco = ''
        let imgs = ''

        switch(marca){
            case 'lamborghini':

                //acha carro no objeto
                for(let i=0; i<carros.lamborghini.length; i++){
                    if(carros.lamborghini[i].modelo === modelo){
                        preco = carros.lamborghini[i].preco
                        imgs = [carros.lamborghini[i].imagem[0], carros.lamborghini[i].imagem[1]]
                    }
                }

                //capitaliza nome da marca
                marca = marca[0].toUpperCase() + marca.substring(1)

                //monta carro na pagina
                gerarCarro(imgs, modelo, marca, preco)

                break
            case 'ferrari':
                //acha carro no objeto
                for(let i=0; i<carros.ferrari.length; i++){
                    if(carros.ferrari[i].modelo === modelo){
                        preco = carros.ferrari[i].preco
                        imgs = [carros.ferrari[i].imagem[0], carros.ferrari[i].imagem[1]]
                    }
                }

                //capitaliza nome da marca
                marca = marca[0].toUpperCase() + marca.substring(1)

                //monta carro na pagina
                gerarCarro(imgs, modelo, marca, preco)

                break
            case 'bmw':
                //acha carro no objeto
                for(let i=0; i<carros.bmw.length; i++){
                    if(carros.bmw[i].modelo === modelo){
                        preco = carros.bmw[i].preco
                        imgs = [carros.bmw[i].imagem[0], carros.bmw[i].imagem[1]]
                    }
                }

                //capitaliza nome da marca
                marca = marca[0].toUpperCase() + marca.substring(1)

                //monta carro na pagina
                gerarCarro(imgs, modelo, marca, preco)

                break
            case 'mercedes-benz':
                //acha carro no objeto
                for(let i=0; i<carros.mercedes.length; i++){
                    if(carros.mercedes[i].modelo === modelo){
                        preco = carros.mercedes[i].preco
                        imgs = [carros.mercedes[i].imagem[0], carros.mercedes[i].imagem[1]]
                    }
                }

                //capitaliza nome da marca
                marca = marca[0].toUpperCase() + marca.substring(1)

                //monta carro na pagina
                gerarCarro(imgs, modelo, marca, preco)

                break
        }
    })
}
else{ //é de colecionador
    let propriedade

    //verifica onde começa propriedade
    for(let i=0; i<fullurl.length; i++){
        if(fullurl[i] === '='){
            propriedade = fullurl.substring(i+1)
        }
    }
    
    //Separa items
    propriedade = propriedade.split('%26')

    //recebe caminho da imagem
    img = `./img/colecionador/${propriedade[0]}`

    //separa nome do carro
    propriedade[0] = propriedade[0].split('-')
    
    gerarCarro(img, propriedade[0][1], propriedade[0][0], propriedade[2])

    //recebe elementos do documento
    const ano = document.getElementById('ano')
    const cambio = document.getElementById('cambio')
    
    //muda conteudo
    ano.innerHTML = propriedade[1]
    cambio.innerHTML = 'Manual'
}