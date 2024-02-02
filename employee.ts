class Employee{
    name:string
    department:string
    salary:number

    setEmployee(name:string,department:string,salary:number){
        this.name=name;
        this.department=department;
        this.salary=salary;
    }

    printDetails(){
        console.log(this.name,this.department,this.salary);
    }
}

let obj1=new Employee()
obj1.setEmployee("akash","hr",25000)
obj1.printDetails()

