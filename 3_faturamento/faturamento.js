function faturamento() {
  const jsonData = require("./dados.json");
  let arrayValores = [];
  let quantidadeItensMedia = 0;
  let soma = 0;
  let quantidadeValoresAcimaMedia = 0;

  jsonData.map((item) => {
    if (item.valor > 0) {
      arrayValores.push(item.valor);
      soma = soma + item.valor;
      quantidadeItensMedia++;
    }
  });

  let valorMaximo = Math.max(...arrayValores);
  let valorMinimo = Math.min(...arrayValores);
  let media = soma / quantidadeItensMedia;

  arrayValores.map((valor) => {
    if (valor > media) {
      quantidadeValoresAcimaMedia++;
    }
  });

  return [valorMaximo, valorMinimo, quantidadeValoresAcimaMedia];
}

console.log(faturamento());
