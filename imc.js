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
            classificacao = 'ta gordinho né filho.';
        }else if (valorIMC < 35){
            classificacao = 'parabens você é uma lua :).';
        }else if (valorIMC < 40){
            classificacao = 'parabens você é um planeta :);
        }else {
            classificacao = 'parabens você é um buraco negro :)';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}  ${classificacao}`;
       
    }else {
        resultado.textContent = 'deixa de ser burro namoral';
    }

}

calcular.addEventListener('click', imc);