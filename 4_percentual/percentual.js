function calcularPercentuaisDeRepresentacao(faturamentos) {
  const valorTotal = Object.values(faturamentos).reduce(
    (total, valor) => total + valor
  );

 
  const percentuais = {};
  for (const estado in faturamentos) {
    percentuais[estado] = (faturamentos[estado] / valorTotal) * 100;
  }

  return {
    valorTotal: valorTotal,
    percentuais: percentuais,
  };
}

const faturamentos = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const resultados = calcularPercentuaisDeRepresentacao(faturamentos);
console.log(
  "Valor total mensal da distribuidora: R$" + resultados.valorTotal.toFixed(2)
);
console.log("Percentual de representação por estado:");
for (const estado in resultados.percentuais) {
  console.log(estado + ": " + resultados.percentuais[estado].toFixed(2) + "%");
}
