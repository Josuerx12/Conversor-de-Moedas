const api = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: { apikey: "ukcHwJLTgc9KXOTt77cGXWMTTeDUHp2G" },
});

//variaveis globais do documento
const moedasSelect = document.querySelectorAll("select");
const btn = document.querySelector(".btn");
const display = document.getElementById("resultado");

api
  .get(`/symbols`)
  .then((response) => {
    const moedaResponse = response.data.symbols;

    console.log(moedaResponse);

    for (const currencyCode in moedaResponse) {
      console.log(currencyCode);
      const newHtml = `
            <option value="${currencyCode}">${currencyCode} - ${moedaResponse[currencyCode]}</option>
       `;
      moedasSelect[0].innerHTML += newHtml;
      moedasSelect[1].innerHTML += newHtml;
    }
  })
  .catch((error) => console.error(`Api não carregou as moedas.`));

btn.addEventListener("click", () => {
  const moedaOrigem = document.getElementById("moeda1");
  const moedaDestino = document.getElementById("moeda2");
  const input = document.getElementById("valoraserconvertido");
  //axios create
  let moedaOrigemValue = moedaOrigem.value;
  let moedaDestinoValue = moedaDestino.value;
  let inputValue = input.value.replace(",", ".");

  console.log(inputValue);
  api
    .get(
      `convert?to=${moedaDestinoValue}&from=${moedaOrigemValue}&amount=${inputValue}`
    )
    .then((response) => {
      const resultadoAPI = response.data.result;
      const resultado = resultadoAPI.toFixed(2);
      console.log(resultado);
      display.value = resultado;
    })
    .catch((error) =>
      console.error(`Falhou carregamento dos valores das moedas`)
    );
});
