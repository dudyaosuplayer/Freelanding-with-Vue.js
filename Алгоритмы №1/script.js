// Функция для сортировки массива по возрастанию
function inAscendingOrder(array) {
  // Копируем массив, чтобы не изменять оригинальный
  const sortedArray = [...array];
  // Используем метод sort() для сортировки
  sortedArray.sort((a, b) => a - b);
  return sortedArray;
}

// Функция для сортировки массива по убыванию
function inDescendingOrder(array) {
  // Копируем массив, чтобы не изменять оригинальный
  const sortedArray = [...array];
  // Используем метод sort() для сортировки
  sortedArray.sort((a, b) => b - a);
  return sortedArray;
}

// Пример использования
const array = [1, 16, 23, 2, 25, 14, 32, 3, 90, 24];

console.log(inAscendingOrder(array)); 
console.log(inDescendingOrder(array)); 

const array2 = [0, 24, 4356, 6, 8, 1000, -500, 89];

console.log(inAscendingOrder(array2)); 
console.log(inDescendingOrder(array2));