function Checar(Numero){


    const num1 = parseFloat (document.getElementById('n1').value)


    if (num1 % 2 === 0) {
        resultado = `O numero é Par !`
    } else {
        resultado = `O numero é Impar! `
    }


    document.getElementById("resultado").innerText = resultado;


}
