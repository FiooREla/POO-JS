const lista1= [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count={};
//la funcion map se encarga de devolver un nuevo array sin mutarlos, es decir un array list
//, entonces recorre y comienza , como creamos un objeto lista1count, usa este objeto para ver la propiedad dentro de el
//osea el 1,2 3 o 4, entonces pregunta si hay un 1 ya existemçnte, como no hay pasa a else y le da valor 1, luego con todos, cuando repite la propiedad 1
//pregunta dsi dentro del objeto hay 1, si hay , entonces le suma 1.
lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento]+=1; 

        }else{
            lista1Count[elemento]=1;
        }
        
    }
);
// sort es un metodo que recibe funcion o comparacion, si es comparacion usa -1,0,1 para comparar entre ellos, si solo usamos sort, se compara por string
//osea por cada caracter compara, por eso puede pasar que 10, 110, 19 asi, si es comparacion ya no pasa esto, y tenemos que retornar a- b; 1 es por el segundo valor del array que es el numero de veces de la propiedad

// entries convierte  array
const lista1Array=Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1]- elementoB[1];
    }
);

const moda=lista1Array[lista1Array.length-1]

//EN FUNCION
function moda(lista1) {
    const lista1Count ={};

lista1.map(
    function (propiedad) {
        if (lista1Count[propiedad]) {
            lista1Count[propiedad]+=1;
        }else{
            lista1Count[propiedad]=1;
        }
    }
)

const lista1Array=Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1]-elementoB[1];
    }
)

const moda=lista1Array[lista1Array.length-1];
return moda;
}
