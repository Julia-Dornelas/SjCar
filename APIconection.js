function gerarMarcas(){
    let dados = ['lamborghini', 'ferrari', 'bmw', 'mercedes']
    return dados
}

async function gerarObjeto(){
    //Função requisita modelo
    const getCarsData = async (makeName) => {
        const apiURL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${makeName}/modelYear/2023/vehicletype/car?format=json`

        //Requisição
        const resultado = await fetch(apiURL)

        //Transforma para JSON
        const data = await resultado.json()

        return data
    }

    //array que alimenta API
    const marcas = gerarMarcas()

    //array dos preços
    const precos = [['4.000.000', '3.600.000', '3.600.000'], ['3.970.000', '5.290.000', '4.660.000', '3.490.000', '2.790.000', '3.095.000', '3.160.000', '3.490.000', '4.950.000', '10.800.000', '10.000.000', '3.000.000', '4.800.000'], ['745.000', '1.300.000', '500.000', '700.000', '300.000', '350.000', '410.000', '1.200.000', '2.700.000', '620.000', '620.000', '410.000', '700.000', '790.000', '820.000', '250.000', '175.000', '455.000', '500.000', '600.000', '880.000', '700.000', '1.200.000', '600.000', '500.000', '1.000.000', '1.280.000', '750.000'], ['1.900.000', '570.000', '466.000', '450.000', '436.000', '1.200.000', '105.000', '575.000', '700.000', '345.000', '1.000.000', '1.200.000']]

    //objeto que guarda dados da API
    let carros = {
        lamborghini: [{marca: 'LAMBORGHINI', modelo: 'Huracan Sterrato', preco: '3.900.000', imagem: ['./img/lamborghini/Huracan Sterrato/1.svg', './img/lamborghini/Huracan Sterrato/1.svg']}],
        ferrari: [],
        bmw: [],
        mercedes: []
    }

    //recebe dados
    await Promise.all(marcas.map(async (marca, i) => {
        const dados = await getCarsData(marca)

        //Constroi carro
        for(let j=0; j<dados.Count; j++){
            //Objeto que guarda carro temporario
            let carro = {
                marca: '',
                modelo: '',
                preco: '',
                imagem: []
            }
            
            carro.marca = dados.Results[j].Make_Name
            carro.modelo = dados.Results[j].Model_Name
            carro.preco = precos[i][j]

            //trata erro da pasta de imagens
            if(i==3){
                carro.imagem.push(`./img/mercedes/${dados.Results[j].Model_Name}/1.svg`)
                carro.imagem.push(`./img/mercedes/${dados.Results[j].Model_Name}/2.svg`)
            }
            else{
                carro.imagem.push(`./img/${dados.Results[0].Make_Name.toLowerCase()}/${dados.Results[j].Model_Name.replace('/', '')}/1.svg`)
                carro.imagem.push(`./img/${dados.Results[0].Make_Name.toLowerCase()}/${dados.Results[j].Model_Name}/2.svg`)
            }

            //Acrescenta no objeto
            switch(i){
                case 0:
                    carros.lamborghini.push(carro)
                    break
                case 1:
                    carros.ferrari.push(carro)
                    break
                case 2:
                    carros.bmw.push(carro)
                    break
                case 3:
                    carros.mercedes.push(carro)
                    break
            }
        }
    }))
    
    return carros
}
