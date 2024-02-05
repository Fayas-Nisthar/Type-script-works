interface Oninit{
    ngOnInit()
}
interface OnChanges{
    ngOnchanges()
}

class myComponent implements Oninit,OnChanges{
    ngOnInit() {
        console.log("oninit");
        
    }
    ngOnchanges() {
        console.log("onchanges");
        
    }
}