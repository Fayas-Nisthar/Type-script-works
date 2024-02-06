interface framework{
    name:string
    architecture:string
    roadMap()
}

class Django implements framework{
    name:string
    architecture:string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadMap() {
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}

class Angular implements framework{
    name:string
    architecture:string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadMap() {
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}

class Student{
    frameworkObject:framework
    constructor(framework){
        this.frameworkObject=framework
    }
    learn(){
        this.frameworkObject.roadMap()
    }
}

var djangoObject= new Django("django","mvt")

var studentObj= new Student(djangoObject)
studentObj.learn()