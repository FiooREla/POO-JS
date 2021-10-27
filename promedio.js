// const lista1=[
//     100,
//     200,
//     300,
//     500,
// ];
//let puedes cambiar en el futuro


function calcularMediaArit(lista1) {
    // let sumalista1= 0;

    // for (let i = 0; i < lista1.length; i++) {
    //     sumalista1=sumalista1 + lista1[i];
    
    // }
    //reduce envia argumento y suma,multiplicar, etc co el primero, con el segundo y asi
    const sumaLista = lista1.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }  
    );

    const promedioLista1= sumaLista / lista1.length;
    return promedioLista1;
}

//calcularMediaArit([1,14,151,98])
//66