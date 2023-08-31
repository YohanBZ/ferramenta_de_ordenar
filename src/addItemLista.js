import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function adicionandoItemLista(){
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
  return array
}

export default adicionandoItemLista;