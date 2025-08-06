// https://fakestoreapi.com/products
// https://v2.jokeapi.dev/joke/Programming
// https://jsonplaceholder.typicode.com/posts/1/comments

// const jokeApi = () => {
//   fetch("https://v2.jokeapi.dev/joke/Programming")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// jokeApi();

// const jokeApi_1 = async () => {
//   const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
//   const data = await response.json();
//   joke.textContent = data.joke || data.setup;
// };
// const btnJk = document.querySelector(".btn-jk");
// const joke = document.getElementById("joke");

// btnJk.addEventListener("click", jokeApi_1);

// const tableBody = document.getElementById("table-body");
// const api = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1/comments"
//   );
//   const data = await res.json();
//   console.log(data);
//   data.forEach((element) => {
//     console.log(element);
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//     <td>${element.id}</td>
//     <td>${element.name}</td>
//     <td>${element.email}</td>
//     <td>${element.body}</td>

//     `;
//     tableBody.appendChild(tr);
//   });
// };
// api();

// const productCard = document.querySelector(".product_card");

// const producApi = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);

//   data.forEach((ele) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//      <img src="${ele.image}"/>
//      <p>${ele.name}</p>
//      <p>${ele.price}</p>
//      `;
//     productCard.appendChild(div);
//   });
// };

// producApi();

// const n = async () => {
//   const res = await fetch("https://fakestoreapi.com/users");
//   const data = await res.json();
//   console.log(data);
// };
// n();
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};

export default message;
