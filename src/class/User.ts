export default class User{
    private name:String;
    private uuid: String;
    constructor(name: String, uuid: String){
        this.name = name;
        this.uuid = uuid;
    }

    public display(){
        console.log(`name is ${this.name}, uuid is ${this.uuid }`)
    }
}