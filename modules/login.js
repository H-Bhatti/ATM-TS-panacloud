import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accNumber",
            type: "numbers",
            message: "Please Enter Your Card Number "
        }, {
            name: "pinCode",
            type: "password",
            message: "Please enter pin Number"
        }]);
    let user = users.find(x => x.accNumber == answer.accNumber && x.pinCode == answer.pinCode);
    if (typeof user != "undefined") {
        //procede
        console.log(`naiceee!! ${user.name}`);
        mainScreen();
    }
    else {
        console.log("Invaid credentials");
        console.log(typeof user);
    }
}
export default login;
