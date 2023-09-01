import addLista from "./src/addItemLista.js"
import listaOrdernada from "./src/imprimir.js"

async function lista(){ 
  console.log("\n********* Lista Ordenada *********\n")
    const CriarLista = await addLista();
    listaOrdernada(CriarLista)
  }

lista();