function calcularPercentuaisDeRepresentacao(faturamentos) {
  // Calculando o valor total mensal da distribuidora
  const valorTotal = Object.values(faturamentos).reduce(
    (total, valor) => total + valor
  );

  // Calculando o percentual de representação de cada estado
  const percentuais = {};
  for (const estado in faturamentos) {
    percentuais[estado] = (faturamentos[estado] / valorTotal) * 100;
  }

  // Retornando um objeto contendo o valor total e os percentuais de representação
  return {
    valorTotal: valorTotal,
    percentuais: percentuais,
  };
}

// Exemplo de uso da função com os mesmos dados do exemplo anterior
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
