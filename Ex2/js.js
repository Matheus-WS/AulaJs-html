function calcula(operacao)  {
    const num1 = parseFloat (document.getElementById("n1").value)
    const num2 = parseFloat (document.getElementById("n2").value )


    switch(operacao){
        case'+':
        resultado = num1 + num2
        break;
        case '-':
        resultado = num1 - num2
        break;
        case'*':
        resultado = num1 * num2
        break;
        case '/':
        resultado = num1 / num2
    }
    document.getElementById("resultado").innerText = resultado;
}



