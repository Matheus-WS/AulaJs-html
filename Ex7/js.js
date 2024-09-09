function classificar(Nota){


    const nota1 = parseFloat(document.getElementById('nota').value)


    let conceito;
        if (nota1 >= 9) {
            conceito = 'A';
        }
        else if (nota1 >= 7) {
            conceito = 'B';
        }
        else if (nota1 >= 5) {
            conceito = 'C';
        }
        else if (nota1 >= 3) {
            conceito = 'D';
        }
        else {
            conceito = 'E';
        }


        document.getElementById('conceito').innerText = conceito;
}
