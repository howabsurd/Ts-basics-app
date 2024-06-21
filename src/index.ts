import Expense from "./class/Expense";
import Group from "./class/Group";
import User from "./class/User";
import Split from "./class/Split";



// Client Code
const krish = new User("Krish Poptani", "masti")
const mahavir = new User("Mahavir","masti2");
const naman = new User("Naman", "masti3");

const users : User []= [krish,naman, mahavir];

const split1 = new Split(krish,400);
const split2 = new Split(mahavir, 400);

const splitarray: Split[] =[split1, split2];

const expense = new Expense("masti4",1200, naman,  splitarray);
const expenses = [expense];

const group1 = new Group(users, expenses);

group1.display();