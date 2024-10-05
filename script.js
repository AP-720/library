class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}

	toggleRead() {
		this.read = !this.read;
	}
}

class Library {
	constructor() {
		this.books = [];
		this.modal = document.querySelector("[data-modal]");
		this.cancelButton = document.querySelector("[data-cancel]");
		this.addButton = document.querySelector("[data-new-book]");
		this.addBookBtn = document.getElementById("add-book-form");

		this.addButton.addEventListener("click", () => this.showModal());
		this.cancelButton.addEventListener("click", () => this.modal.close());
		this.addBookBtn.addEventListener("submit", (e) => this.handleAddBook(e));

		window.onload = () => {
			this.displayBooks();
		};
	}

	addBook(title, author, pages, read) {
		const newBook = new Book(title, author, pages, read);
		this.books.push(newBook);
		this.displayBooks();
	}

	displayBooks() {
		const bookContainer = document.querySelector(".book-container");
		bookContainer.innerHTML = "";

		this.books.forEach((book, index) => {
			const card = document.createElement("div");
			card.classList.add("card");
			card.setAttribute("data-book-num", index);

			card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> <span class="read-state">${
							book.read ? "Yes" : "No"
						}</span></p>
            <div class="card-btn"> 
            <button type="button" class="remove-btn">Remove</button>
            <button type="button" class="update-read-btn">Toggle Read</button>
            </div>
          `;

			bookContainer.appendChild(card);
		});

		// remove EventListener
		document.querySelectorAll(".remove-btn").forEach((button) => {
			button.addEventListener("click", (event) => this.removeBook(event));
		});
		// update EventListener
		document.querySelectorAll(".update-read-btn").forEach((button) => {
			button.addEventListener("click", (event) => this.toggleReadStatus(event));
		});
	}

	removeBook(event) {
		const selectedCard = event.target.closest(".card");
		const bookNumber = selectedCard.getAttribute("data-book-num");
		this.books.splice(bookNumber, 1);
		this.displayBooks();
	}

	toggleReadStatus(event) {
		const selectedCard = event.target.closest(".card");
		const bookNumber = selectedCard.getAttribute("data-book-num");
		const readText = selectedCard.querySelector(".read-state");

		this.books[bookNumber].toggleRead();

		readText.textContent = this.books[bookNumber].read ? "Yes" : "No";
	}

	showModal() {
		this.modal.showModal();
	}

	closeModal() {
		this.addBookForm.resest();
		this.modal.closel();
	}

	handleAddBook(event) {
		event.preventDefault();

		const title = document.getElementById("title").value;
		const author = document.getElementById("author").value;
		const pages = document.getElementById("pages").value;
		const read = document.getElementById("read").checked;

		this.addBook(title, author, pages, read);

		this.addBookBtn.reset();
		this.modal.close();
	}
}

const myLibrary = new Library();

myLibrary.addBook("Ulysses", "James Joyce", "736 pages", true);
myLibrary.addBook(
	"Crime and Punishment",
	"Fyodor Dostoevsky",
	"720 pages",
	true
);
