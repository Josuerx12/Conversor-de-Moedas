// // Axios

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last/',
})

api.get(`${firstOptionValue}-${secondOptionValue}`)
    .then((response) => {
        const infos = response.data
        console.log (infos.USDBRL.ask)
    })
    .catch(error => window.alert('Carregamento ocorreu de forma incorreta.'))

//

const moedas = document.querySelectorAll('select')

function moedaPrimaria(firstOption){
    moedas[0].addEventListener('change', () => {
        const moeda = moedas[0].value
        firstOption = moeda
    })
    return firstOption
}
console.log(moedaSecundaria(firstOption))

function moedaSecundaria(secondOption){
    moedas[1].addEventListener('change', () => {
        const moeda = moedas[1].value
        secondOption = moeda
    })
    return secondOption
}
console.log(moedaSecundaria(secondOption))

function calcular() {
    const input = document.getElementById('valoraserconvertido')
    input.addEventListener('input', () => {
        let inputValue = input.value.replace(',', '.')
        console.log(inputValue)
    })
}
calcular()
