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


const mixed = [[5, 'a'], ['b', 6, 7], [true, 10]];
let counter = 0
let counter2 = 0
// Output atteso: 4
for (i=0; i<mixed.length;i++){
  for (j=0;j<mixed[i].length; j++){
    counter++;
    if (typeof mixed[i][j] == typeof 1){
      counter2++;
    }
  }
}

console.log(`All' interno dell' array ci sono ${counter} elementi, di cui ${counter2} numerici`)


const arrt = [[1, 50, 'a'], [100, 'b', 30], [9, 99]];
// Output atteso:
// Massimo nel gruppo 0: 50
// Massimo nel gruppo 1: 100
// Massimo nel gruppo 2: 99
let max1 = Number.NEGATIVE_INFINITY
let max2 = Number.NEGATIVE_INFINITY
let max3 = Number.NEGATIVE_INFINITY

for (i=0; i<arrt.length; i++){
  for (j=0; j<arrt[i].length; j++){
    if (typeof arrt[0][j] == typeof 1 && arrt[0][j] > max1){
      max1 = arrt[0][j]
    }else if (typeof arrt[1][j] == typeof 1 && arrt[1][j] > max2){
      max2 = arrt[1][j]
    }else if(typeof arrt[2][j] == typeof 1 && arrt[2][j] > max3){
      max3=arrt[2][j]
    }

  }
}

console.log(`Il numero massimo dell'array1 è ${max1}, del array 2 è ${max2}, dell' array3 è ${max3}`)





