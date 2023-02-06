
// You should implement your task here.

module.exports = function towelSort (matrix) {


  if (matrix === undefined || matrix.length === 0) {
    return [];
  } else {
    
    let Arr = [];

    for (i = 0; i < matrix.length; i++) {
      if (i % 2 > 0) {
        Arr[i] = matrix[i].reverse();
      } else {
        Arr[i] = matrix[i];
      }
    }

    let resultArr = Arr.join(',').split(',');

    let result = [];

    for (i = 0; i < resultArr.length; i++) {
        result[i] = parseInt(resultArr[i]);
    }
    
    return result;

  }  
}