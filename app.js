import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


async function lista(){ 
    const array = []
    let condicao = true
    while (condicao) {
      let item = await rl.question("Digite uma propriedade de css ou digite 'sair' para encerrar: ")
      if(item.toLocaleLowerCase() != 'sair'){
        array.push(item)
      }else{
        condicao = false
      }
    }
    array.sort().forEach((element) => {
      console.log(`- ${element}`)
    });
  }
  
  lista()