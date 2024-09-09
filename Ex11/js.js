const select = document.querySelector("select");
let modalidade;

select.addEventListener("change", (e) =>{
    modalidade = e.target.value
})

function calcular(Frete){

    const peso1 = parseFloat(document.getElementById('peso').value)
    let valorFrete;

    console.log(modalidade);

    switch (modalidade) {
        case 'padrao':
            valorFrete = peso1 * 10;
        break;
        case 'expresso':
            valorFrete = peso1 * 20;
        break;
        case 'internacional':
            valorFrete = peso1 * 100;
        break;
     }
    document.getElementById('valorFrete').innerText = `O valor do frete é R$ ${Number(valorFrete).toFixed(2)}.`;
}
