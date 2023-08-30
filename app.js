import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('qual seu nome?', nome => { console.log(`Praze ${nome}`)})