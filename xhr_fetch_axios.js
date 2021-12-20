// XHR (XMLHttpRequest) - старый способ отправки запросов на сервер

// URL по котрому мы будем делать запросы
const requestURL = "https://jsonplaceholder.typicode.com/users";


// // Создать объект XMLHttpRequest
// const xhr = new XMLHttpRequest();

// // Вызвать у объекта метод open, который откроет новое соединение
// xhr.open("GET", requestURL, true);

// // Прописать функцию, которая будет отрабатывать приполчении данных с сервера (важно прописать её ПЕРЕД send()!!!)
// xhr.onload = () => {
//   if (xhr.status >= 400) {
//     console.log(xhr.response);
//   } else {
//     console.log(JSON.parse(xhr.response)); //use JSON.parse
//   }

// }

// // Обработать ошибку ()
// xhr.onerror = () => {
//   console.log(xhr.response);
// }

// // Отправить запрос
// xhr.send();


// function sendRequest(method, url) {
//   return new Promise((resolve, reject) => {
//     // Создать объект XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Вызвать у объекта метод open, который откроет новое соединение
//     xhr.open(method, url, true);

//     // Прописать функцию, которая будет отрабатывать приполчении данных с сервера (важно прописать её ПЕРЕД send()!!!)
//     xhr.onload = () => {
//       if (xhr.response >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(/*typeof*/ xhr.response); //use JSON.parse
//       }

//     }

//     // Обработать ошибку ()
//     xhr.onerror = () => {
//       reject(xhr.response);
//     }

//     // Отправить запрос
//     xhr.send();
//   });
// }

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));



// POST
// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     // Создать объект XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Вызвать у объекта метод open, который откроет новое соединение
//     xhr.open(method, url, true);

//     // Указать content-type, чтобы данные возвращались в виде JSON,а не plain text
//     xhr.setRequestHeader('Content-type', 'application/json');

//     // Прописать функцию, которая будет отрабатывать приполчении данных с сервера (важно прописать её ПЕРЕД send()!!!)
//     xhr.onload = () => {
//       if (xhr.response >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(JSON.parse(xhr.response)); //use JSON.parse
//       }

//     }

//     // Обработать ошибку ()
//     xhr.onerror = () => {
//       reject(xhr.response);
//     }

//     // Отправить запрос
//     xhr.send(JSON.stringify(body)); //передаём в метод send объект body превратив его в строку
//   });
// }

// const body = {
//   name: 'Olita',
//   age: 32
// }

// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// Fetch - более новый API, не во всех браузерах работает (этот метод возвращает Promise поэтому сразу же пишем return). По умолчанию выполняет метод GET (поэтому достаточно передать один параметр -- url)
// function sendRequest(url) {
//   return fetch(url).then(response => {
//     console.log(response);
//     return response.json();
//   }) // 
// }

// const body = {
//   name: 'Olita',
//   age: 32
// }

// sendRequest(requestURL)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-type': 'application/json'
//   }

//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     return response.json();
//   }) // 
// }

// const body = {
//   name: 'Olita',
//   age: 32
// }

// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// AXIOS - JavaScript-библиотека для выполнения либо HTTP-запросов в Node. js, либо XMLHttpRequests в браузере. Одна из особенностей, которая делает её лучше fetch() — автоматические преобразования JSON-данных.
function sendRequest(url) {
  return axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
}

sendRequest(requestURL)
  .then(data => console.log(data))
  .catch(error => console.log(error));