const prompt = require('prompt')
prompt.start()

const soma = () => {
  prompt.get(['a', 'b', 'c'], (err, result) => {
    console.log("A soma de A e B é igual a:", parseInt(result.a) + parseInt(result.b))
  })
}

soma()

/**
 * 1- Criar cálculos de operações simples com variaveis fixas (ex: const a = 1...)
 * 2- Criar cálculos usando prompt e criando funções, como no exemplo acima.
 * 3- Criar um arquivo pra cada operação.
*/