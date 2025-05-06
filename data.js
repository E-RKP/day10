let prova = 'test'
console.log(prova)
let massimo = Number.NEGATIVE_INFINITY

const arre = [[1,44,33,34,98,'abc'], ['ciao', 67]]

for (i=0; i < arre.length ; i++){
  for (j=0; j<arre[i].length; j++){
     if (arre[i][j]> massimo && typeof arre[i][j] == typeof 1){

        massimo = arre[i][j]  
    } 
  } 
}

console.log(massimo)


const data = [[2, 99, 'a'], [-10, 33], ['b', 0]];
// Output atteso: -10
let min = Number.POSITIVE_INFINITY

for (i=0; i<data.length; i++){
  for (j=0; j<data[i].length; j++){

    if (typeof data[i][j] == typeof 1 && data[i][j] < min){
      min = data[i][j]
    } 
  }
}

console.log(min)


const values = [[1, 2, 'x'], [3, 4], [5, 'y', 6]];
// Output atteso: 21
let somma = 0

for (i=0; i<values.length; i++){
  for (j=0; j<values.length;j++){
    if (typeof values[i][j] == typeof 1){

      somma = somma+values[i][j]
    }
  }
}

console.log(somma)





