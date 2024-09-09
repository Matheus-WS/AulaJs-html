const frm = document.getElementById ("frm")
const resp = document.getElementById ("resp")


frm.addEventListener ("submit", (e) => {
    e.preventDefault()


    let celsius = (frm.temp.value)


    let grausF
    grausF = (celsius * 9/5) + 32


    console.log(grausF)


    resp.innerText =  `Temperatura: ${grausF} º Fahrenheit`
})
