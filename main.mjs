function videoPlay(id) {
    const urlSecreta ="https://platzyultrasecreto.com";
    console.log("se esta reproduciendo desde la url secreta" + urlSecreta);    
}

function videoStop(id) {
    const urlSecreta ="https://platzyultrasecreto.com";
    console.log("sPausamos la url secreta" + urlSecreta);

}
//export : unicas clases prototipos, bloques de codigo que podemos acceder desde cualquier otro scrip desde el codigo
export class PlatziClass{
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
