// ------------------- global variables ---------------

const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");

//------------------ functions -----------------

//add item from input field to list
const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;

  //validate input
  if (newItem === "") {
    alert("Please add an item");
    return;
  } //end If

  //create new <li>
  console.log("Success");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  //create new <button>
  const button = createButton("remove-item btn-link text-red");
  //create new <i>
  const icon = createIcon("fa-solid fa-xmark");
  //append <i> inside <button>
  button.appendChild(icon);
  //append <button> inside <li>
  li.appendChild(button);
  //append <li> inside <ul>
  itemList.appendChild(li);
  //reset itemInput variable
  itemInput.value = "";
}; //end of addItem

//create new button for use in <li>
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}; //end createButton

//create new icon for use in <li>
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}; //end createIcon

//remove item from list
const removeItem = (e) => {
  console.log(e.target.parentElement.classList);

  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}; //end removeItem

const clearItems = () => {
  itemList.innerHTML = ""
};

//  -------------------- Event Listeners -----------------------

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
