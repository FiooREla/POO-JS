//Un objeto en JavaScript tiene otro objeto, llamado prototype (prototipo, en español). 
//Cuando pedimos a un objeto una propiedad que no tiene, la busca en su prototipo. 
//Así, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.

const natalia={
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso pràctico de HTML y CSS",

    ],
    //creamos metodos al objeto literal
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },

};//objeto literal


//hacer que natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de responsive desing");


function Student(name,age,cursosAprobados){
    //atributos
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    // this.aprobarCurso=function (nuevoCursito) {
    //     this.nuevoCursito.push(nuevoCursito);
    // }
}

//asi podemos crear metodos por fuera
Student.prototype.aprobarCurso=function (nuevoCursito) {
         this.cursosAprobados.push(nuevoCursito);
     }
const juanita = new Student(
    "juanita alejandra",
    15,
    [
        "Introduccion a la produccion de videojuegos",
        "creacion de personaje",
    ],
);


//PROTOPIPOS CON LA SINTAXIS DE CLASES
/*
class Student2{
    constructor(name,age,cursosAprobados){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }
    //metodo constructor y metodo aprobar curso
    aprobarCurso(nuevoCursito){
        //this hace referencia a prototipo student2
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito=new Student2(
    "miguel",
    28,
    [
        "curso de analisis de bu",
        "princiop de visualizacion ",
    ],
);
*/

//FUNCION RODO (RECIBE Y RETORNA OBJETOS) y se da en los parametro cuando tenemos muchos de estos y se hace
//dificil para identificarlo por el orden

class Student2{
    constructor({
        name,
        age,
        email,
        cursosAprobados=[],
    })
        //podemos enviar los parametros como name,age en desorden
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.cursosAprobados=cursosAprobados;
    }
    //metodo constructor y metodo aprobar curso
    aprobarCurso(nuevoCursito){
        //this hace referencia a prototipo student2
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito=new Student2(
    {
    email: "miguelito@platy.com",
    name:"miguel",
    age:26,
    
    }
);