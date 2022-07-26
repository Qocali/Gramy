import inquirer from "inquirer";
import axios from "axios";
import mongo from "../Models/Coins.js";
const answer = await inquirer
  .prompt({
    type: "list",
    message: "What is your favorite reptile?",
    name: "bundle",
    choices: ["All Coins", "Not Coins"],
  })
  .then((answers) => {
    console.info("Answer:", answers.bundle);
  });
axios.get("https://api.coingecko.com/api/v3/coins/list/").then((data) => {
  for (let i = 0; i < 30; i++) {
    console.log(data.data[i].id)
    const m  = new mongo({name:data.data[i].name,symbol:data.data[i].symbol});
    m.save();
}
})
