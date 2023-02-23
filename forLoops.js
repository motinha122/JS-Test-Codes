const array = ['Batata', 'Cenoura', 'Arroz'];

for (i in array) { //índice
    console.log(array[i]);
}

for (i of array) { //item
    console.log(i);
}

array.forEach((item, index) => console.log(item, index)); //item e índice