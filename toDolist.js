function addList() {
  let input = document.getElementById("inputs"); // get the input element
  let input_value = input.value.trim(); //Gets the input element and its trimmed value
  let newList = document.getElementById("items"); //Gets the unordered list element where items will be added

  //If the input isn't empty, creates a new list item and adds it to the list

  if (input_value) {
    let li = createList(input_value);
    newList.appendChild(li);
    input.value = ""; //Clears the input field after adding the item
  }
}

//createList(input_value) function
function createList(input_value) {
  let li = document.createElement("li"); //Creates a new list item (li element)

  //creates a check box element
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  checkBox.onclick = function () {
    li.toggle("done");
  };

  //A span containing the task text
  let span = document.createElement("span");
  span.textContent = input_value;

  //A remove button that deletes the item when clicked
  let removebtn = document.createElement("button");
  removebtn.textContent = "Remove";
  removebtn.className = "remove";
  removebtn.onclick = function () {
    li.remove();
  };

  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(removebtn);

  return li;
}
