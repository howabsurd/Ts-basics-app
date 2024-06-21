import User from "./User";
import Split from "./Split";

export default class Expense{
    public id : String;
    public amount : Number;
    public whopaid: User;
    public splits: Split[];
    constructor(id: String, amout: Number, whopaid: User, splits:Split[]){
        this.id= id;
        this.amount = amout;
        this.whopaid = whopaid;
        this.splits = splits;
    }

    public display(){
        console.log("-------------Expense details-------------");
        console.log(this.whopaid);
        console.log(this.amount);
        this.splits.forEach((split)=>{
            console.log(split);
        })
    }


}