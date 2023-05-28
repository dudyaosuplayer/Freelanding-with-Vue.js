const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Response Status:', xhr.status); // Вывод кода ответа
      const responseData = JSON.parse(xhr.responseText);
      console.log('Response:', responseData);
      // Дальнейшая обработка возвращенных данных
      const returnedData = responseData; // Запись возвращенных данных в переменную
      console.log('Returned data:', returnedData);
    } else {
      const errorText = xhr.statusText || 'Unknown error'; 
      console.error('Error:', xhr.status); // Вывод кода ошибки
    }
  };

  xhr.onerror = function() {
    const errorText = xhr.statusText || 'Network error';
    console.error('Error',  xhr.status, errorText);
  };

  xhr.send(JSON.stringify(data));
});
