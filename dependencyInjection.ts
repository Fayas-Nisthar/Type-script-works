interface bike{
    name:string
    drive()
}


class PassionPro implements bike{
    name: string
    constructor(name){
        this.name=name
    }
    drive() {
        console.log(this.name," starts method");
        
    }
}

class Hunter implements bike{
    name: string
    constructor(name){
        this.name=name
    }
    drive() {
        console.log(this.name," starts method");
        
    }
}

class Person{
    vehicleObject:bike
    constructor(vehicle){
        this.vehicleObject=vehicle
    }

    ride(){
        this.vehicleObject.drive()
    }
}

var hunterObject= new Hunter("hunter")
var passionObject= new PassionPro("passion")

var personObject= new Person(hunterObject)
personObject.ride()