class Comment{
    constructor({
        content,
        studentName,
        studentRole="estudiante",
    }){
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.like=0;
    }
    publicar(){
        console.log(this.studentName + " ( " + this.studentRole +" )");
        console.log(this.like + " likes");
        console.log(this.content);
    }
}


function videoPlay(id) {
    const urlSecreta ="https://platzyultrasecreto.com";
    console.log("se esta reproduciendo desde la url secreta" + urlSecreta);    
}

function videoStop(id) {
    const urlSecreta ="https://platzyultrasecreto.com";
    console.log("sPausamos la url secreta" + urlSecreta);

}
//export : unicas clases prototipos, bloques de codigo que podemos acceder desde cualquier otro scrip desde el codigo
class PlatziClass{
    constructor({
        name,
        videoID,
    })
    {
        this.name=name;
        this.videoID=videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}


class Course{
    constructor({
        name,
        classes=[],
        isFree = false,
        lang="spanish",
    }) {
        this._name=name;
        this.classes=classes;
        this.isFree=isFree;
        this.lang=lang;
    }
    //Convertimos a name en metodo get
    //conseguimos nombre del curso de las instancias
    get name(){
        return this._name;
    }
    //aqui se pone cursoProgBas= "sdd"
    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso malito de programacion") {
            console.error("Wey .. no");
        }else{
            this._name=nuevoNombrecito;
        }
    }

}

const cursoProgBas = new Course({
    name:"Curso gratis de programaciòn bàsica",
    isFree:true,
});

const cursoDefinitivoHTML = new Course({
    name:"Curso DEFINITIVO html y css",

});

const cursoPracticoHTML = new Course({
    name:"Curso practico html y css",
    lang:"english"
});

class learningPaths{
    constructor ({
        nombre,
        Cursos=[],

    })
    {
        this.nombre=nombre;
        this.Cursos=Cursos;
    }
};


const escuelaWeb= new learningPaths(
    {
        nombre:"escuela de desarrollo web",
        Cursos:[
            cursoProgBas,
            cursoDefinitivoHTML,
            "curso de javascript",
            "curso de HTML",
            "Curso de PHP",
            //si varias clases llevan mismo curso se debe abstraer, co clase course
        ]
    },
);

const escuelaSeguridad= new learningPaths(
    {
        nombre:"escuela de Iso2700",
        Cursos:[
            cursoProgBas,
            cursoPracticoHTML,
            "curso de seguridad de la informacion",
            "curso de informatica forense",
        ],
    },

);
//HERENCIA


//clase prototipo estudiante
class Student {
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses =[],
        learningPaths =[],
    })
    {
        this.name= name;
        this.email= email;
        this.username= username;
        this.socialMedia={
            //twitter: twitter,// podemos escribir una sola vez
            twitter,
            instagram,
            facebook,
        }       
        this.approvedCourses =[]=approvedCourses;
        this.learningPaths =[]=learningPaths;
    }

    publicarComentario(commentContent){
        const comment= new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
};

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourses(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+ this.name + " solo puedes tomar cursos abiertos");

        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        //super extiende al constructore de la clase madre
        super(props);
    }
    approveCourses(newCourse){
        //sabe que es lang y reconoce la clase courses por ducktyping js intermedio
        if(newCourse.lang !=="english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+ this.name + " no puedes tomar cursos en ingles");
            
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourses(newCourse){        
            this.approvedCourses.push(newCourse);       
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourses(newCourse){        
            this.approvedCourses.push(newCourse);       
    }
    publicarComentario(commentContent){
        const comment= new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}




const juan2=new FreeStudent({
    name:"JuanDc",
    username:"juandc",
    email:"juanito@goa.com",
    twitter: "fjuandc",
});

const miguelito2=new BasicStudent({
    name:"Miguel",
    username:"miguelito",
    email:"miguel@goa.com",
    twitter: "migelonc",
    learningPaths: [
        escuelaSeguridad,

    ],
});

const freddy=new TeacherStudent({
    name:"Fredy vega",
    username:"fdsasas",
    email:"fredier@goa.com",
    twitter: "fjuandc",
});
