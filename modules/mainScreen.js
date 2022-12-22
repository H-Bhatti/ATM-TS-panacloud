import inquirer from "inquirer";
async function mainScreen() {
    const options = await inquirer.prompt([{
            name: "Menu",
            type: "list",
            choices: ["Balance Inquirey", "Cash widrawal", "Deposit cash", "Transfer Cash", "Utility Bills", "Exit"],
            message: "please select option"
        }]);
    switch (options.Menu) {
        case "Balance Inquirey":
            console.log(`Balance inquiery`);
            break;
        case "Cash widrawal":
            console.log(`Cash widrawal`);
            break;
        case "Deposit cash":
            console.log(`Deposit cash`);
            break;
        case "Transfer Cash":
            console.log(`Transfer Cash`);
            break;
        case "Utility Bills":
            console.log(`Utility Bills`);
            break;
        case "Exit":
            console.log(`Exit`);
            break;
    }
}
export default mainScreen;
