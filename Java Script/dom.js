const mainHeading = document.getElementById("main-heading");

mainHeading.style.backgroundColor = "orangered";

mainHeading.style.textAlign = "center";
console.log(mainHeading);

const lang = document.getElementsByClassName("lang");

console.log(lang);

lang[0].style.backgroundColor = "yellow";

for (let l of lang) {
  l.style.backgroundColor = "red";
}

Array.from(lang).forEach(
  (element) => (element.style.backgroundColor = "green")
);

const h4Elements = document.getElementsByTagName("h4");

const liElements = document.getElementsByTagName("li");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "blue";

for (let i of h4Elements) {
  i.style.backgroundColor = "grey";
}

Array.from(liElements).forEach(
  (ele) => (ele.style.textTransform = "uppercase")
);

const element = document.querySelector(".lang");

element.style.backgroundColor = "violet";

const langAll = document.querySelectorAll(".lang");
console.log(langAll);
for (let i of langAll) {
  i.style.backgroundColor = "pink";
}
langAll.forEach((ele) => (ele.style.color = "white"));

const fe = document.getElementById("be");

const firstChild = fe.firstElementChild;
firstChild.style.backgroundColor = "red";

const ulELement = document.querySelectorAll("ul");

ulELement.forEach((ele) => {
  const firstChild = ele.firstElementChild;
  firstChild.style.backgroundColor = "black";
});
