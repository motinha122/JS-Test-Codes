function calculo_troco(valor_pago, valor_compra, currency) {
  console.time("Calcular Troco");

  let troco = ((valor_pago - valor_compra) * 100).toFixed(2);
  console.log(`Troco : ${troco/100}`);

  const quantidade = currency.reduce((valores, moeda, indice) => {
    valores[indice] = 0;
    if (troco >= moeda) {
      do {
        valores[indice] += 1;
        troco -= moeda;
      } while (troco - moeda >= 0);
    }
    return valores;
  }, []);

  console.timeEnd("Calcular Troco");
  return quantidade;
}

function calcular_troco(valor_pago, valor_compra) {

    const real = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
    
    const quantidade = calculo_troco(valor_pago, valor_compra, real);
    
    for (valor in quantidade) {
      if (quantidade[valor] != 0) {
        console.log(`${(real[valor] / 100).toFixed(2)} : ${quantidade[valor]}`);
      }
    }
}

calcular_troco(183.23, 175.76);