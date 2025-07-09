console.log('My code is running');

let toDoList = [];

let section = document.querySelector('section');
let nodes;

let listAdder = (string) => {
  section.innerHTML += "<p style='float:left; width: 80%'><input type='checkbox' onchange='handleChange(this)'>" + string + "</input></p>";
}

let btn = document.querySelector('.button');

let checkedValues = [];

btn.addEventListener("click", (event) => {
  listAdder(document.getElementById("textBox").value);
});


let p;
function handleChange(checkbox) {
  if (checkbox.checked) {
    p = checkbox.parentNode;
    p.addEventListener("change", (event) => { p.style.float = "right";
    event.preventDefault()});
  } else {
    p = checkbox.parentNode;
    p.addEventListener("change", (event) => { p.style.float = "left";
    event.preventDefault()});
  }
}
