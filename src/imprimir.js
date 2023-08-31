
async function mostraListaOrdernada(array){
  array.sort().forEach((element) => {
    console.log(`- ${element}`)
  });
}

export default mostraListaOrdernada;