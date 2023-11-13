function gerarMarcas(){
    let dados = ['lamborghini', 'ferrari', 'bmw', 'mercedes']
    return dados
}

function gerarObjeto(){
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
    const precos = [['4.000.000', '3.600.000', '3.600.000'], ['3.970.000', '5.290.000', '4.660.000', '3.490.000', '2.790.000', '3.095.000', '3.160.000', '3.490.000', '4.950.000', '10.800.000', '10.000.000', '3.000.000', '4.800.000'], ['745.000', '1.300.000', '500.000', '700.000', '300.000', '350.000', '410.000', '1.200.000', '2.700.000', '620.000', '620.000', '410.000', '700.000', '790.000', '820.000', '250.000', '175.000', '455.000', '500.000', '600.000', '880.000', '700.000', '1.200.000', '600.000', '500.000', '1.000.000'], ['1.900.000', '570.000', '466.000', '450.000', '436.000', '1.200.000', '105.000', '575.000', '700.000', '345.000', '1.000.000']]

    //objeto que guarda dados da API
    let carros = {
        lamborghini: [],
        ferrari: [],
        bmw: [],
        mercedes: []
    }

    //recebe dados
    for(let i=0; i<marcas.length; i++){
        const dados = getCarsData(marcas[i])

        dados.then((result) => {

            //Constroi carro
            for(let j=0; j<result.Count; j++){
                //Objeto que guarda carro temporario
                let carro = {
                    marca: '',
                    modelo: '',
                    preco: '',
                    imagem: []
                }

                carro.marca = result.Results[j].Make_Name
                carro.modelo = result.Results[j].Model_Name
                carro.preco = precos[i][j]
                carro.imagem.push(`./img/${result.Results[0].Make_Name.toLowerCase()}/${result.Results[j].Model_Name}/1.svg`)
                carro.imagem.push(`./img/${result.Results[0].Make_Name.toLowerCase()}/${result.Results[j].Model_Name}/2.svg`)

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
        })
    }

    return carros
}
