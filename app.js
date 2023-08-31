import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function addLista(array){
  let condicao = true
  while (condicao) {
    let item = await rl.question("Digite uma propriedade de css ou digite 'sair' para encerrar: ")
    if(item.toLocaleLowerCase() != 'sair'){
      array.push(item)
    }else{
      condicao = false
    }
  }
  ordernar(array)
}

async function lista(){ 
    const array = []
    addLista(array)
  }

async function ordernar(array){
  array.sort().forEach((element) => {
    console.log(`- ${element}`)
  });
}

lista()