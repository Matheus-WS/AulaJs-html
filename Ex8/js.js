function Checar(Numero){


    const num1 = parseFloat (document.getElementById('n1').value)


    if (num1 % 2 == 1) {
        resultado = `O numero é Primo !`
    } 
    else if(num1 == 2) {
        resultado = `O numero é primo! `
    }
    else{
        resultado = `O numero não é Primo`
    }


    document.getElementById("resultado").innerText = resultado;


}