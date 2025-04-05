function addList() {
  let input = document.getElementById("inputs");
  let input_value = input.value.trim();
  let newList = document.getElementById("items");

  if (input_value) {
    let li = createList(input_value);
    newList.appendChild(li);
    input.value = "";
  }
}

function createList(input_value) {
  let li = document.createElement("li");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  checkBox.onclick = function () {
    li.classList.toggle("done");
  };

  let span = document.createElement("span");
  span.textContent = input_value;

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

/*addList() function:

Gets the input element and its trimmed value

Gets the unordered list element where items will be added

If the input isn't empty, creates a new list item and adds it to the list

Clears the input field after adding the item

createList(input_value) function:

Creates a new list item (li element)

Adds three child elements to it:

A checkbox that toggles a "done" class (typically used for strikethrough styling)

A span containing the task text

A remove button that deletes the item when clicked

Key features:

Items can be marked as complete (using the checkbox)

Items can be removed

Empty inputs are ignored (due to the trim() check) */
