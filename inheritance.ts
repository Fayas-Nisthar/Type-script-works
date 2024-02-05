class Parent{
    parentMethod(){
        console.log("parent method");
        
    }
}

class Parent2 extends Parent{
    secondParentMethod(){
        console.log("Second Parent method");
        
    }
}

class Child extends Parent{
    childMethod(){
        console.log("Child method");
        
    }
}

var ch=new Child()
ch.childMethod()
ch.parentMethod()




//javascript or ts not support multiple inheritance, support multilevel