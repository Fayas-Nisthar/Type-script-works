class Students{
    rollno:Number
    name:string
    course:string

    constructor(rollno:number,name:string,course:string){
        this.rollno=rollno
        this.name=name
        this.course=course
    }

    printDetails(){
        console.log(this.rollno,this.name,this.course);
        
    }
}

const st=new Students(10,"Fayas","Django")
st.printDetails()