#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWelcome to word count from 'Hania khan"));
const countWords = async () => {
    const message = await inquirer.prompt([
        {
            name: "message",
            type: "input",
            message: "Enter the message you want to count words for:",
        },
    ]);
    const wordCount = message.message.trim().split(" ");
    console.log(wordCount);
    console.log(chalk.yellow.bold(`\nNumber Of words: ${wordCount.length}\n`));
    const repeat = await inquirer.prompt([
        {
            name: "repeat",
            type: "confirm",
            message: "Do you want to count words again?",
            default: "true",
        },
    ]);
    if (repeat.repeat) {
        await countWords();
    }
    else {
        console.log(chalk.green.bold("\nExiting...\n"));
    }
};
const main = async () => {
    let options = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Select an option",
            choices: ["countWords", "exit"],
        },
    ]);
    if (options.options === "countWords") {
        await countWords();
    }
    else {
        console.log("Exiting...");
    }
};
main();
