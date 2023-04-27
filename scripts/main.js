// // Axios

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last/',
})

const moedas = document.querySelectorAll('select')
const input = document.getElementById('resultado')
const button = document.querySelector('button')
const resultado = document.querySelector('#resultado')

button.addEventListener('click', () => {
    let inputValue = input.value
    let origem = moedas[0].value
    let destino = moedas[1].value

    api.get(`/${origem}-${destino}`)
    .then((response) => {
        console.log(response.data.BRLUSD.ask)
        
        let calculo = inputValue * response.data.BRLUSD.ask

        console.log(calculo)
        resultado.innerHTML= `${calculo}`
    })
    .catch(error => alert('Erro no servidor...'))
})