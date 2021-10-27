//HELPERS
function esPar( numerito) {
    // if (numerito % 2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // } esto se simplifica con lo de abajo
    return (numerito %2 ===0);
}

function calcularMediaArit(lista) {
    // let sumalista1= 0;

    // for (let i = 0; i < lista1.length; i++) {
    //     sumalista1=sumalista1 + lista1[i];
    
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }  
    );

    const promedioLista1= sumaLista / lista.length;
    return promedioLista1;
}
//TERMINA HELPERS: se les llama asi porque ayuda al calculo
//calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.lenght)) {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaArit([personitaMitad1,personitaMitad2])
        return mediana;
        
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//calculando mediana general
const salariosPer = peru.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosPerSorted = salariosPer.sort(
    function (salarya,salaryb) {
        return salarya - salaryb;
    }
);




const medianaGeneralPer = medianaSalarios(salariosPerSorted);
//mediana de top 10

const spliStart=(salariosPerSorted.lenght * 90)/100;
const spliceCount= salariosPerSorted.lenght-spliStart;

const salariosPerTop10 = salariosPerSorted.splice(
    spliStart,
    spliceCount,
);

const medianaTop10Per = medianaSalarios(salariosPerTop10);
//splice recibe dos parametros,pones el cuchillo donde quieres partir como primer paramenro, y el segundo le indicas el numero
//de tajadas que quieres sacar, y esos numeros se guardan como array
console.log({
    medianaGeneralPer,
     medianaTop10Per,
}


    //medianaSalarios(salariosPerSorted)
    );
    
/*PRACTICANDO
    const creandoMap = [];
    const listaMap = peru.map(
        function (creandoMap) {
            return creandoMap.salary;
        }
    )

    const ordenando = listaMap.sort(
        function (var1, var2) {
            return var1 - var2;
        }
    )

    function esPar(ordenado) {
        return ordenado %2 ===0;
    }

    const mediaArit = [];
    function calcularMediaArit(lista) {
        const suma = lista.reduce(
            function (valorAcumulado= 0, valor) {
                return valorAcumulado + valor;
            }
        )
        const resultado = suma/lista.length;
        return resultado;
    }

    function medianaArit(lista) {
        const mitad= parseInt(lista.length/2);
        if (esPar(mitad)){
            numero = lista[mitad-1];
            numero1 = lista[mitad];
            return resultado=calcularMediaArit(numero,numero1);
        }else{
            return resultado2=lista[mitad]/2;
    }
}

console.log(medianaArit(ordenando));
    */