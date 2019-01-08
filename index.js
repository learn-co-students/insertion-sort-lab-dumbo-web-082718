function findMinAndRemove(array){
  let currentMinimum = array[0]
  let minimumIndex = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] < currentMinimum){
      currentMinimum = array[i]
      minimumIndex = i
    }
  }
  array.splice(minimumIndex, 1)
  return currentMinimum
}

function insertionSort(array){
  let sortedArray = []
  let minimum
  while(array.length != 0){
    minimum = findMinAndRemove(array)
    sortedArray.push(minimum)
  }
  return sortedArray
}
