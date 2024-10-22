// fetch("http://localhost:8000/hello") // Укажите нужный порт и путь
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json(); // или response.text(), в зависимости от ожидаемого формата
//   })
//   .then((data) => {
//     console.log(data); // Обработка полученных данных
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
// 