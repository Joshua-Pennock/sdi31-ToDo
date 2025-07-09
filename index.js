console.log('My code is running');

let toDoList = [];

let listAdder = (string) => {
  toDoList.push(string);
  console.log(toDoList)
}

let btn = document.querySelector('.button');

btn.addEventListener("click", () => {
  let inputValue = document.getElementById("textBox").value;
listAdder(inputValue)});
