
async function mostraListaOrdernada(array){
  console.log("\n **** Lista Ordenada: \n ")
  array.sort().forEach((element) => {
    console.log(`- ${element}`)
  });
}

export default mostraListaOrdernada;