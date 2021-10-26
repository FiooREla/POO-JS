class Cursos{
    constructor({
        name,
        Coursses,
        profes=[],
        isFree=false,
        lang="spanish",
    }) {
        this._name=name;
        this.Coursses=Coursses;
        this.profes=profes;
        this.isFree=isFree;
        this.lang=lang;
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
    isFree:true,
    
});

const cursoLogica=new Cursos({
    name:"Programaciòn logica",
    lang:"english",
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

class PlatziFree extends Student{
    constructor(variable){
        super(variable)
    }
    approveCourses(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo siento "+ this.name + " no puedes ingresar a este curso");
        }
    }
}

class PlatziBasic extends Student{
    constructor(variable){
        super(variable)
    }
    approveCourses(newCourse){
        if (newCourse.lang!== "english") {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("No puedes ingresar a este curso "+ this.name);
        }
    }
}

class PlatziExpert extends Student{
    constructor(variable){
        super(variable)
    }
    approveCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

const luisillo=new PlatziBasic(
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

const miguelito=new PlatziExpert(
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