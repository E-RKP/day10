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


const datas = [[1, 'a'], [2, 'b', 3]];
// Output atteso: [[2, 'a'], [4, 'b', 6]]


for (i=0; i<datas.length; i++){
  for (j=0; j<datas[i].length;j++){
    if (typeof datas[i][j] == typeof 1){
      datas[i][j]= datas[i][j]*2
    }
  }
}
console.log(datas)

const input = [[2, 5, 'a'], [4, 3, 'b']];
// Output atteso: [[4, 5, 'a'], [8, 3, 'b']]
for (i=0; i<input.length;i++){
  for (j=0; j<input[i].length;j++){
    if (input[i][j] % 2 == 0 && typeof input[i][j] == typeof 1 ){
      input[i][j]= input[i][j]*2
    }
  }
}
console.log(input)


const inputt = [[1, 'ciao'], ['ok', 3, 'abc']];
// Output: [[1, 4], [2, 3, 3]]
for (i=0; i<inputt.length;i++){
  for (j=0; j<inputt[i].length;j++){
    if (typeof inputt[i][j] != typeof 1){
      inputt[i][j]= inputt[i][j].length
    }
  }
}

console.log(inputt)

const putt = [[1, 'ciao'], [2, 'hello', 'a']];
let ocunter = 0
// Output atteso: 3
for (i=0; i<putt.length;i++){
  for (j=0; j<putt[i].length;j++){
    if (typeof putt[i][j] != typeof 1){
      ocunter++;
    }
  }
}
console.log(ocunter)

const lol = [[5, 12], ['a', 30, 8]];
// Output: [[5, 'grande'], ['a', 'grande', 8]]
for (i=0; i<lol.length; i++){
  for (j=0; j<lol[i].length;j++){
    if (typeof lol[i][j] == typeof 1 && lol[i][j] > 10){
      lol[i][j]= 'grande'
    }
  }
}

console.log(lol)


const affr = [[true, 1, 'a'], [false, 2, true]];
// Output atteso: [[1, 'a'], [2]]
for (i=0; i<affr.length;i++){
  for (j=0; j<affr[i].length; j++){
    if (typeof affr[i][j] == Boolean){
      affr = affr.filter(affr[i][j])
    }
  }
}
console.log(affr)


const mixxed = [10, 'a', true, 3, false, 'b', 7];
let somming = 0
for (i=0; i<mixxed.length;i++){
  if (typeof mixxed[i] == 'number'){
    somming = somming+mixxed[i]
  }
}

console.log(somming)

const uno = [5, 12, 'ciao', 25, true, 8]
let sommers = 0
for (i=0; i<uno.length;i++){
 if (uno[i]>10){
  sommers=sommers+uno[i]
 }
}

console.log('risultato esercizio 1', sommers)


const due = ['ciao', 'ok', 'cia', 'bene']
let duedue = []
for (i=0; i<due.length; i++){
 if (due[i].length >= 4){
  duedue.push(due[i])
 }

}

console.log(duedue)

const tre = [[5, 99, 'a'], [20, 'b', 7]]
let maxer = Number.NEGATIVE_INFINITY
// Output atteso: 99
for (i=0; i<tre.length;i++){
  for (j=0; j<tre[i].length;j++){
    if (tre[i][j]>maxer){
      maxer = tre[i][j]
    }
  }
}
console.log(maxer)

const quattro = [['ciao', 'ok'], ['bene', 'fine']]
let lets = 0

for (i=0; i<quattro.length; i++){
  for (j=0; j<quattro[i].length; j++){
    lets = lets+quattro[i][j].length
  }
}

console.log(lets)


const cinque = [1, 2, 'a', 3, true]
// Output atteso: [2, 2, 'a', 6, true]

for (i=0; i<cinque.length;i++){
  if (typeof cinque[i] == typeof 1 && cinque[i] % 2 != 0){
    cinque[i]= cinque[i]*2
  }
}

console.log(cinque)

