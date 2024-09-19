const myLibrary = [];

const newBook = document.querySelector("[data-new-book]");
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("[data-cancel]");
const addButton = document.querySelector("[data-add]");
const addBookForm = document.getElementById("add-book-form");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); 
}

function displayBooks() {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      `;

      bookContainer.appendChild(card);
});
}

newBook.addEventListener("click", () => {
    modal.showModal();
});

cancelButton.addEventListener("click", () => {
    document.getElementById("add-book-form").reset();
    modal.close();
});

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    console.log(read);

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    document.getElementById("add-book-form").reset();
    modal.close();
});

// myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false));
myLibrary.push(new Book('Ulysses', 'James Joyce', '736 pages', true));
myLibrary.push(new Book('Crime and Punishment', 'Fyodor Dostoevsky', '720 pages', true));


displayBooks();


