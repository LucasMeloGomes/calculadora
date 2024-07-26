const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'você precissa comer daqui a pouco o vento leva';
        }else if (valorIMC < 25) {
            classificacao = 'parabens você existe';
        }else if (valorIMC < 30){
            classificacao = 'vc é uma montanha.';
        }else if (valorIMC < 35){
            classificacao = 'você é um meteorito.';
        }else if (valorIMC < 40){
            classificacao = 'você é uma lua';
        }else {
            classificacao = 'parabens você é um planeta';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);