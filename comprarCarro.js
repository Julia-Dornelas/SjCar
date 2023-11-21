/*recebe informações da página de catalogo*/

//recebe url
let fullurl = window.location.href
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

/*recebe dados do carro*/
/*let data = gerarObjeto()

data.then((carros) => {
    switch(marca){
        case 'lamborghini':
            break
        case 'ferrari':
            break
        case 'bmw':
            break
        case 'mercedes-benz':
            break
    }
})*/