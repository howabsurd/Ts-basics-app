import User from "./User";

export default class Split{
    public user : User;
    public amountOwe : Number;
    constructor(user: User, amountOwe: Number){
        this.user= user;
        this.amountOwe = amountOwe;
    }

    public display(){
        console.log("----------------------Split Details---------------------")
        console.log(this.amountOwe);
        console.log(this.user)
    }
}