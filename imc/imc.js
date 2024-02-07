
botao.addEventListener('click', function () {

    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let calculo = peso / (altura * altura)
    let resposta = document.getElementById('resposta')
    let imc = document.getElementById('imc')
    
   
    if(isNaN(calculo)){
    resposta.innerHTML = 'Digite somente números'
    }
    if(calculo === 0){
    resposta.innerHTML = 'Digite um número maior que 0'
    }
   

    if (calculo <= 18.5) {
        resposta.innerHTML = 'Abaixo do normal'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }
    else if(calculo >= 18.6 && calculo <= 24.9){
        resposta.innerHTML = 'Normal'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }
    else if(calculo >= 25.0 && calculo <=  29.9){
        resposta.innerHTML = 'Sobrepeso'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }
    else if(calculo >= 30.0 && calculo <=  34.9){
        resposta.innerHTML = 'Obesidade grau I'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }
    else if(calculo >= 35.0 && calculo <= 39.9){
        resposta.innerHTML = 'Obesidade grau II'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }
    else if(calculo >=40){
        resposta.innerHTML = 'Obesidade grau III'
        imc.innerHTML = `${calculo.toFixed(2)}`
    }


})

