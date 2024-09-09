function calcula(media){

    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)

    let mediaA = (nota1 + nota2 + nota3) / 3

    if(mediaA >=7){
        resultado = `Sua media doi ${mediaA.toFixed(1)} Aprovado!! :D `
    }
    else if(mediaA >= 4 && mediaA < 7){
        resultado = `Sua media doi ${mediaAtoFixed(1)} Em recuperação :/ `
    }
    else {
        resultado = `Sua media doi ${mediaAtoFixed(1)} reprovado :c`
    }
  
    document.getElementById("resultado").innerText = resultado;

}