// 12- Faça uma página que leia os três lados de um triângulo e informe se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou
// escaleno (todos os lados diferentes) e apresente uma imagem mostrando o triângulo escolhido.
// (Professor deixou fazer este apenas no terminal.)
var prompt = require('prompt-sync')()
let LadoA = Number(prompt("Lado A: "))
let LadoB = Number(prompt("Lado B: "))
let LadoC = Number(prompt("Lado C: "))
let soma1 = LadoB + LadoC
let soma2 = LadoC + LadoA
let soma3 = LadoA + LadoB
if (LadoA<soma1 || LadoB<soma2 || LadoC<soma3){
    if((LadoA==LadoB) && (LadoB==LadoC))
        console.log(`é um triangulo equilatero`)
    if((LadoA !== LadoB && LadoB == LadoC) || (LadoC !== LadoB && LadoB == LadoA) || (LadoB !== LadoA && LadoA == LadoC))
        console.log(`é um triangulo isosceles`)
    if(LadoA!==LadoB && LadoB!==LadoC && LadoC!==LadoA)
        console.log(`é um triangulo escaleno`)
}
else {
    console.log(`não é um triangulo`)
}