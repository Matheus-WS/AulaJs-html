const form = document.querySelector("form");
const select = document.querySelector("select");
let tipoMoeda




select.addEventListener("change", (e) => {
    tipoMoeda = e.target.value;
})


form.addEventListener("submit",converter);


function converter(e) {
    e.preventDefault();


    // Obtenha e converta o valor do input
    let valorR = parseFloat(document.getElementById("valorR").value);1
       
    // Verifique o tipo de conversão e calcule o valor convertido
    if (tipoMoeda == "dolar") {
        valorR = valorR * 5.48;
    }
    else {
       valorR = valorR * 7;
    }
    // Atualize o resultado na página
    document.getElementById("resultado").innerText = valorR.toFixed(2);
}
