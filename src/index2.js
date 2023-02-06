/*
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

//console.log(matrix)
//console.log('-----')

//console.log(matrix.length)

let Arr = [];

for (i = 0; i < matrix.length; i++) {
    if (i % 2 > 0) {
        Arr[i] = matrix[i].reverse();
        //console.log(resultArr[i]);
    } else {
        Arr[i] = matrix[i]
        //console.log(resultArr[i]);
    }
}
//console.log('--')
//console.log(Arr);
//console.log('--')

let string = Arr.join(',')

let resultArr = string.split(',')

//console.log('--')
//console.log(resultArr)

let result = []

for (i = 0; i < resultArr.length; i++) {
    result[i] = parseInt(resultArr[i])
}
/*
let res = []

for (i = 0; i < resultArr.length; i++) {
    
}

console.log(result)
*/

let matrix

console.log(typeof(matrix))