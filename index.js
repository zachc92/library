const library = document.getElementById("library");
const addButton = document.getElementById("add-book");
const newBookForm = document.getElementById("new-book-form");
const submitButton = document.getElementById("submit-button");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("have-read");
let libraryBooks = [];

addButton.addEventListener("click", () => addBook());
submitButton.addEventListener("click", () => submitBook());

function addBook() {
    newBookForm.style.display = "flex";
}

function submitBook() {
    let newDiv = document.createElement("div");
    let newTitle = document.createElement("p");
    let newAuthor = document.createElement("p");
    let newPages = document.createElement("p");

    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    newPages.textContent = pages.value;

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newPages);

    library.appendChild(newDiv);
    newBookForm.style.display = "none";
}