const calcularIMC = document.getElementById('send');

function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultTxt = document.getElementById('resultTxt');
    const resultGrau = document.getElementById('resultGrau');
    
    if ( altura !== '' && peso !== '' ) {
        
        const resIMC = ( peso / (altura * altura)).toFixed(1);

        let classificacao = "";
        let png = document.getElementById('png');

        if ( resIMC < 18.5 ) {
            classificacao = 'abaixo do peso.';
            png.src = 'assets/png/magro.png';
            document.body.style.background = '#90dc90';
        }
        else if ( resIMC < 25 ) {
            classificacao = 'com peso ideal.';
            png.src = 'assets/png/ideal.png';
            document.body.style.background = '#7acb26';
        }
        else if ( resIMC < 30 ) {
            classificacao = 'levemente acima do peso.';
            png.src = 'assets/png/acimaPeso.png';
            document.body.style.background = '#f28f79';
        }
        else if ( resIMC >= 30 ) {
            classificacao = 'com obesidade. Cuidado!';
            png.src = 'assets/png/obeso.png';
            document.body.style.background = '#B22222';
        }

        resultTxt.textContent = `${resIMC}`;
        resultGrau.textContent = `Você está ${classificacao}`;

    } else {
        resultGrau.textContent = 'Preencha todos os campos!';
    }
}
calcularIMC.addEventListener('click', imc);

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#send");
        btn.click();
    }
});