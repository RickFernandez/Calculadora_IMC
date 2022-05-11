const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if ((nome, altura, peso !== '')) {
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    let estadoIMC = ''

    if (valorIMC < 18.5) {
      estadoIMC = 'abaixo do peso!'
    } else if (valorIMC < 25) {
      estadoIMC = 'com o peso ideal. Parabéns!'
    } else if (valorIMC < 30) {
      estadoIMC = 'levemente acima do peso.'
    } else if (valorIMC < 35) {
      estadoIMC = 'com obesidade grau I.'
    } else if (valorIMC < 40) {
      estadoIMC = 'com obesidade grau II.'
    } else {
      estadoIMC = 'com obesidade III. Cuidado!!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC}. Você está ${estadoIMC}`
  } else {
    resultado.textContent = 'Preencha todos os dados!'
  }
}

calcular.addEventListener('click', imc)
