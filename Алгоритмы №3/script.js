function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid + 1; // Число найдено, возвращаем его позицию
    } else if (arr[mid] < target) {
      left = mid + 1; // Искомое число находится в правой половине массива
    } else {
      right = mid - 1; // Искомое число находится в левой половине массива
    }
  }

  return null; // Число не найдено, возвращаем null
}

// Пример использования функции
const sortedArray1 = [0, 9, 13, 24, 54, 85, 100];
const sortedArray2 = [1, 2, 3, 14, 16, 23, 24, 25, 32, 90]


console.log(binarySearch(sortedArray1, 24));
console.log(binarySearch(sortedArray2, 24));