#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:naveen521kk@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `See my ${chalk.magentaBright.bold("Website")}?`,
        value: () => {
          open("https://www.naveenmk.me/?utm_source=cli");
          console.log("\nThanks for visiting my website.\n");
        },
      },
      // {
      //     name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
      //     value: () => {
      //         open('https://calendly.com/');
      //         console.log("\n See you at the meeting \n");
      //     }
      // },
      {
        name: "Just quit.",
        value: () => {
          console.log("Bye.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             Naveen M K"),
  handle: chalk.white("@naveen521kk"),
  // work: `${chalk.white("Software Engineer at")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("naveen521kk"),
  github: chalk.gray("https://github.com/") + chalk.green("naveen521kk"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("naveen521kk"),
  web: chalk.cyan("https://www.naveenmk.me"),
  npx: chalk.red("npx") + " " + chalk.white("naveenmk"),

  // labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    // `${data.labelWork}  ${data.work}`,
    // ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi! I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
