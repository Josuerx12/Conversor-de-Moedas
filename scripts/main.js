//variables
const url = `https://economia.awesomeapi.com.br/json/last/-`
const currency = document.getElementById('moeda-primaria')

//events
const currencyValue = currency.addEventListener('onChange', (e) => (e.target.value))

console.log(currencyValue)