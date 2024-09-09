function verificar(Velocidade){
    const velocidade = parseFloat(document.getElementById('velocidade').value)


    let resultado;
        if (velocidade <= 80) {
            resultado = 'Dentro do limite de velocidade.';
        }
        else if (velocidade <= 100) {
            resultado = 'Acima do limite,  multa leve.';
        }
        else {
            resultado = 'Acima do limite, multa grave.';
        }


        document.getElementById('resultado').innerText = resultado;
}
