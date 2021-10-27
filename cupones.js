function descuentoCupon(precio,descuentoCupon) {
    const resultado= precio*((100-descuentoCupon)/100);
    return resultado;
}

function resultadoCupon() {
    const inputCupon=document.getElementById("precioCupon");
    const precioCupon=inputCupon.value;
    const inputdescCupon=document.getElementById("dsctoCupon");
    const dsctoCupon=inputdescCupon.value;

    const inputCodigoCupon=document.getElementById("codigoCupon");
    const dsctoCupon2=inputCodigoCupon.value;


    const resultado=descuentoCupon(precioCupon,dsctoCupon)*((100-dsctoCupon2)/100);
    const resultadoCupon =document.getElementById("resultadoCupon");
    resultadoCupon.innerText=("Total a pagar es: $"+resultado);

}



