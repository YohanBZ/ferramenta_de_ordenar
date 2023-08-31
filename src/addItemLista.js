import * as readline from 'node:readline/promises';
import Validacao from './validacao.js';


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
      if(Validacao.validacao(item) && Validacao.existe(item, array)){
        array.push(item)
        console.log("✅Propriedade adicionada✅\n")
      } else {
        console.log("\n Valor inválido ou já existente❗️")
      }
    }else{
      condicao = false
    }
  }
  return array
}

export default adicionandoItemLista;