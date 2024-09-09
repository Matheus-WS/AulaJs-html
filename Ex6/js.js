function verificar(anoB){


    const ano2 = parseFloat (document.getElementById('ano').value)


    let resultado


    if ((ano2 % 4 === 0 && ano % 100 !== 0) || ano2 % 400 === 0) {
        resultado = `O ano ${ano2} é bissexto.`;
    } else {
        resultado = `O ano ${ano2} não é bissexto.`;
    }


    document.getElementById('resultado').innerText = resultado;
}
