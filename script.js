const myLibrary = [];

const newBook = document.querySelector("[data-new-book]");
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("[data-cancel]");
const addButton = document.querySelector("[data-add]");
const addBookBtn = document.getElementById("add-book-form");

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
        card.setAttribute("data-book-num", index)

        card.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        <div class="card-btn"> 
        <button type="button" class="remove-btn">Remove</button>
        <button type="button" class="update-read-btn">Read</button>
        </div>
      `;

      bookContainer.appendChild(card);
});
}

function addRemoveBookListener(button) {
    button.addEventListener("click", (event) => {
        const selectedCard = event.target.closest('.card');
        
        let bookNumber = selectedCard.getAttribute("data-book-num");
        console.log(bookNumber);
        
        myLibrary.splice(`${bookNumber}`, 1)

        console.table(myLibrary);

        selectedCard.remove();            
});
};

newBook.addEventListener("click", () => {
    modal.showModal();
});

cancelButton.addEventListener("click", () => {
    document.getElementById("add-book-form").reset();
    modal.close();
});

addBookBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    const removeButton = document.querySelectorAll('.remove-btn');
    removeButton.forEach(button => addRemoveBookListener(button));
    document.getElementById("add-book-form").reset();
    modal.close();
});



// Remove Book and Update Read Buttons for the preloaded books

window.onload=function() {
    const removeBook = document.querySelectorAll(".remove-btn");

    removeBook.forEach(button => {
        addRemoveBookListener(button);
    })
};

// const updateRead = document.querySelectorAll(".update-read-btn");
// updateRead.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log('update')
//     });
// });


// myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false));
myLibrary.push(new Book('Ulysses', 'James Joyce', '736 pages', true));
myLibrary.push(new Book('Crime and Punishment', 'Fyodor Dostoevsky', '720 pages', true));


displayBooks();


