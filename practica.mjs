/*PARTE UNO
const natalia={
    name:"name",
    age:12,
    courses:[
        "Curso de fundamentos de progra",
        "curso de scopes y clousures",
    ],
    agregarCurso(nuevoCursito){
        this.courses.push(nuevoCursito);
    }
};

function Student(name,age,courses) {
    this.name=name;
    this.age=age;
    this.courses=courses;
}

Student.prototype.aprobarCurso=function (nuevoCursito) {
    this.courses.push(nuevoCursito);
};

const juanita= new Student(
    "Juana",
    34,
    ["Curso de fundamentos de logica","curso de bunbury"],
);
*/ 
/* OBJETOS LITERALES Y PROTOTIPOS
const alicia={
    name: "alicia",
    age: 21,
    courses: [
        "programacion poo",
        "gramatica"
    ],
    agregarCurso(nuevoCursito){
        this.courses.push(nuevoCursito);
    }
};

function Student(name,age,courses) {
    this.name=name;
    this.age=age;
    this.courses=courses;
};

Student.prototype.aprobarCurso=function(nuevoCursito){
    this.courses.push(nuevoCursito);
}

const juanita = new Student(
    "juana del arco",
    13,
    ["curso de formateo",
    "curso de packing",
    ]
);
*/

//CLASES CON JS
/*
class Student2{
    constructor({
        name,
        age,
        email,
        courses=[],
    })
    {
        this.email=email;
        this.courses=courses;
        this.age=age;
        this.name=name;
    }
    aprobarCurso(nuevoCursito){
        this.courses.push(nuevoCursito);
    }

};

const juanito= new Student2(
    {
        name: "juan",
        age: 22,
        email: "giifs@hmail.com",
        courses:["coçurso de progrmacion"],
    }
);
*/

//POO, ENCAPSULAMIENTO Y ABSTRACCIÒN

class Cursos{
    constructor({
        name,
        Coursses,
        profes=[],
    }) {
        this._name=name;
        this.Coursses=Coursses;
        this.profes=profes;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if (nuevoNombrecito==="curso malito") {
            console.error("Wey no")
        }
        else{
            this._name=nuevoNombrecito;
        }
    }
}



const cursoProgBas=new Cursos({
    name:"Programaciòn basica gratis",
    
});

const cursoLogica=new Cursos({
    name:"Programaciòn logica",
});

const cursoPOO=new Cursos({
    name:"Programaciòn orientada a objetos",
});

class learningPaths{
    constructor({
        nombre,
        curso=[],
    })
    {
        this.nombre=nombre;
        this.curso=curso;

    }
};

class courses{
    constructor({
        name,
        teacher,
    })
    {
        this.name=name;
        this._teacher=teacher;
    }

    get teacher(){
        return this._teacher;
    }
    set teacher(nuevoNombre){
        if (nuevoNombre==="no se suscriban") {
            console.warn("eso no");
        }else{
            this._teacher=nuevoNombre;
        }
    }
}
const desarrolloBack = new learningPaths({
    nombre:"Curso de PHP",
    curso: [
        new courses({
            name:"Curso de iniciacion en PHP",
            teacher:"Gustavito",
        }),
        cursoLogica,
        cursoProgBas,
    ],
    
})
const desarrolloFrond = new learningPaths({
    nombre:"Desarrollo frond end",
    curso:[
        new courses({
            name:"Curso de HTML",
            teacher:"Junito1",
        }),
        new courses({
            name:"Curso de CSS",
            teacher:"Junito55",
        })
    ]
})
const diseñoGrafico = new learningPaths({
    nombre:"Curso de diseño gràfico",
    curso:[
        new courses({
            name:"Curso de combinacion de color",
            teacher:"Juan diego",
        })
    ]
})

class Student {
    constructor({
        name,
        email,
        username,
        approvedCourses=[],
        learningPaths=[],
        twitter=undefined,
        facebook=undefined,
        instagram=undefined,
        puntos,
    })
    {
        this.name=name;
        this.email=email;
        this.username=username;
        this.approvedCourses=[]=approvedCourses;
        this.learningPaths=[]=learningPaths;
        this.socialMedia={
            twitter,
            facebook,
            instagram,
        };
        this.puntos=puntos;
    }
}

const luisillo=new Student(
    {
        name:"luis",
        email:"luis@gmail.com",
        twitter:"tutSio",
        facebook:"Luisito tu papi",
        learningPaths:[
            desarrolloBack,
        ],
        puntos:400,

    }
)

const miguelito=new Student(
    {
        name:"Mifguel",
        email:"miguels@gmail.com",
        twitter:"Milgueloo",
        facebook:"iguel tu papi",
        learningPaths:[
            desarrolloFrond,
        ],
    }
)


//MODULOS ECMASCRIPT

function videoPlay(id) {
    const urlSecreta="https/.www.cuandollegueatualma.com";
    console.log("El video se esta reproduciendo: " +urlSecreta);

}

function videoPause(id) {
    const urlSecreta="https/.www.cuandollegueatualma.com";
    console.log("El video se esta pausando: " +urlSecreta);

}


export class PlatziClass{
    constructor({
        nombre,
        videoID,
    })
    {
        this.nombre=nombre;
        this.videoID=videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoPause(this.videoID);
    }
}