const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left ="40%"
    form.style.tranform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left ="-300px"
    form.style.tranform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

