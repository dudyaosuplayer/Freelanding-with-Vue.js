const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Настраиваем наш запрос
  const options = {
    // Будем использовать метод POST
    method: 'POST',
    // Добавим тело запроса
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    // Дополнительный заголовое с описанием типа данных,
    // которые мы отправляем серверу. В данном случае
    // сервер jsonplaceholder будет знать, как ему
    // обрабатывать запрос
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/posts', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        console.log('Response Status:', response.status); // Вывод кода ответа
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Дальнейшая обработка возвращенных данных
        const returnedData = data; // Запись возвращенных данных в переменную
        console.log('Returned data:', returnedData);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });

});