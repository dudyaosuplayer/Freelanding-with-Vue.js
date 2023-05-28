function pathExist(graph, startNode, destinationNode) {
  const queue = [startNode]; // Очередь для обхода узлов
  const visited = new Set(); // Множество посещенных узлов

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Получаем следующий узел из очереди

    // Если текущий узел является целевым узлом, значит путь существует
    if (currentNode === destinationNode) {
      return true;
    }

    // Проверяем смежные узлы текущего узла
    const adjacentNodes = graph[currentNode] ? graph[currentNode] : [];
    for (const node of adjacentNodes) {
      // Если смежный узел не был посещен, добавляем его в очередь и отмечаем как посещенный
      if (!visited.has(node)) {
        queue.push(node);
        visited.add(node);
      }
    }
  }

  // Если целевой узел не был найден, значит путь не существует
  return false;
}


var list = {
  A: ["B", "C"],
  B: ["D", "F"],
  C: ["K", "L"],
  D: ["M", "N"],
  E: ["P", "X"],
  F: ["Y", "Z"]
};

console.log(pathExist(list, "A", "L")); // Выведет: true
console.log(pathExist(list, "E", "F")); // Выведет: false
console.log(pathExist(list, "A", "Z")); // Выведет: false