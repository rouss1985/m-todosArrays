//No se puede:
//Usar el método .forEach , .map , .reduce, filter

//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
  for(i=0; i<arreglo.length; i++){
      var arreglo= arreglo[i];
  }
  console.log(arreglo);
}

miForEach([1,2,3], function(){})



//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){
  var newArray=[];
  for (i=0; i<arreglo.length; i++){
      newArray.push(arreglo[i]);
  }
  console.log(newArray);
}
miMap([1,2,3]), function(){})




//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, filter){

}






//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
  function miReduce(arreglo,reduce, callback){
    callback(arreglo,reduce);
  }
  miReduce([1, 2, 3], 0, function(arreglo,reduce){
    var finalValue=reduce;
    for(i=0;i<arreglo.length;i++){
      finalValue+=(arreglo[i]);
    }
    console.log(finalValue);
  });
}



//5.- Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){








  
