import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// instaciando contas
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jonatas", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const newAccount: NewAccount = new NewAccount("João", 30);

// operações nas contas

// people account
console.log("\n--PEOPLE ACCOUNT--\n");

peopleAccount.deposit(300);
console.log(peopleAccount);
peopleAccount.withdraw(100);
console.log(peopleAccount);
// company account
console.log("\n--COMPANY ACCOUNT--\n");

companyAccount.deposit(300);
console.log(companyAccount);
companyAccount.withdraw(30);
console.log(companyAccount);
companyAccount.getLoan(200);
console.log(companyAccount);
// new account 
console.log("\n--NEW ACCOUNT--\n");

newAccount.deposit(300)
console.log(newAccount);
newAccount.withdraw(100)
console.log(newAccount);
