const myLibrary = [];

const newBook = document.querySelector("[data-new-book]");
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("[data-cancel]");
const addButton = document.querySelector("[data-add]");

newBook.addEventListener("click", () => {
    modal.showModal();
});

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

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false));
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false));
myLibrary.push(new Book('Ulysses', 'James Joyce', '736 pages', true));
myLibrary.push(new Book('Ulysses', 'James Joyce', '736 pages', true));
myLibrary.push(new Book('Crime and Punishment', 'Fyodor Dostoevsky', '720 pages', true));

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

displayBooks();


