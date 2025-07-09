console.log('My code is running');

let toDoList = [];

let section = document.querySelector('section');
let nodes;

let listAdder = (string) => {
  section.innerHTML += "<p style='float:left; width: 80%'><input type='checkbox' onchange='handleChange(this)'>" + string + "</input></p>";
}

let btn = document.querySelector('.button');

btn.addEventListener("click", () => {
  let inputValue = document.getElementById("textBox").value;
  listAdder(inputValue)
});

let p;
function handleChange(checkbox) {
  if (checkbox.checked) {
    p = checkbox.parentNode;
    p.addEventListener("change", () => { p.style.float = "right"; });
  } else {
    p = checkbox.parentNode;
    p.addEventListener("change", () => { p.style.float = "left"; });
  }
}
