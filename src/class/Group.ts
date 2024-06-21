import User from "./User";
import Expense from "./Expense";

export default class Group{
    public users : User[];
    public expenses : Expense[];
    constructor(users: User[], expenses: Expense[]){
        this.users = users;
        this.expenses = expenses;
    }

    public display(){
        console.log("---------------Group Details-------------------")

        this.users.forEach((user)=>{
            console.log(user);
        })
        this.expenses.forEach((user)=>{
            console.log(user);
        })
    }

}