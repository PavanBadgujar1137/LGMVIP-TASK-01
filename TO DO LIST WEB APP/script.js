const toggleContainer = document.querySelector(".toggle-container");
const toggleImage = document.querySelector("#toggle-image");
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const todoList = document.getElementById("todo-list");
const toggleSound = document.getElementById("toggle-sound");
const toggleBackgroundImage = document.querySelector(".toggleBackgroundImage");

// Add event listener to the add button
addButton.addEventListener("click", function () {
  // Get the input field value
  const todoText = inputField.value;

  if (todoText.trim() !== "") {
    // Create Div
    const adjustInPlain = document.createElement("div");
    adjustInPlain.classList.add("threeItems");

    //  create Div again for Twos
    const useTwo = document.createElement("div");
    useTwo.classList.add("twolistAndremove");

    // Create a radio button element
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "todo";
    radioButton.addEventListener("click", function () {
      if (radioButton.checked) {
        // Apply radio button styling when it is checked
        newTodo.classList.add("radio-checked");
        newTodo.classList.toggle("radioBtn");
      } else {
        // Remove radio button styling when it is unchecked
        newTodo.classList.remove("radio-checked");
      }
    });

    // Create a new list item
    const newTodo = document.createElement("li");
    newTodo.classList.add("firstList");
    newTodo.textContent = todoText;

    // Create a remove button for the list item
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeBtn");
    removeButton.textContent = "x";

    removeButton.addEventListener("click", function () {
      // Remove the parent list item when the remove button is clicked
      newTodo.remove();
      adjustInPlain.remove();
    });

    // Append the radio button and new todo to the div
    useTwo.appendChild(radioButton);
    useTwo.appendChild(newTodo);

    // Append the remove button and div to the main div
    adjustInPlain.appendChild(useTwo);
    adjustInPlain.appendChild(removeButton);

    // Append the new div to the todo list
    todoList.appendChild(adjustInPlain);

    // Clear the input field
    inputField.value = "";
  }
});

// Add event listener to the toggle container
toggleContainer.addEventListener("click", function () {
  // Check the current source of the image
  const currentSrc = toggleImage.getAttribute("src");

  // Toggle the image source based on the current source
  if (currentSrc === "images/icon-moon.svg") {
    // Switch to dark mode
    toggleImage.setAttribute("src", "images/icon-sun.svg");
    toggleImage.setAttribute("alt", "Dark Mode");
    document.body.classList.add("dark-mode"); // Apply dark mode to the entire page

    // Change colors for dark mode
    toggleBackgroundImage.classList.add("backGroundImageContainerLight");
    inputField.style.backgroundColor = "#25273D";
    inputField.style.color = "#C8CBE7";
    addButton.style.backgroundColor = "#25273D";
    addButton.style.color = "#C8CBE7";
    todoList.style.backgroundColor = "#25273D";
    todoList.style.color = "#C8CBE7";
  } else {
    // Switch to light mode
    toggleImage.setAttribute("src", "images/icon-moon.svg");
    toggleImage.setAttribute("alt", "Light Mode");
    document.body.classList.remove("dark-mode"); // Remove dark mode from the page

    // Reset colors to default for light mode
    toggleBackgroundImage.classList.remove("backGroundImageContainerLight");
    inputField.style.backgroundColor = "";
    inputField.style.color = "";
    addButton.style.backgroundColor = "";
    addButton.style.color = "";
    todoList.style.backgroundColor = "";
    todoList.style.color = "";
  }

  // Play the sound effect
  toggleSound.play();
});
