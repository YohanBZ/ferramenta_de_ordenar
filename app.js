import addLista from "./src/addItemLista.js"
import listaOrdernada from "./src/imprimir.js"

async function lista(){ 
    const CriarLista = await addLista();
    listaOrdernada(CriarLista)
  }

lista();