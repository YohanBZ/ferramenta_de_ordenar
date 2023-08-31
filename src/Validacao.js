class Validacao {
  static validacao(item){
    return isNaN(item)
  }

  static existe(item,array){
    for(let i = 0; i < array.length; i++){
      if(array[i] == item){
        return false
      }
    }
    return true
  }
}

export default Validacao
