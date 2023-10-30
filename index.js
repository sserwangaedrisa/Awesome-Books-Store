class BookManager {
  constructor() {
    this.title = document.getElementById('Title');
    this.author = document.getElementById('Author');
    this.addButton = document.getElementById('AddButton');
    this.booksSection = document.getElementById('Books-section');
    this.addedBooks = [];
    this.loadBooksFromLocalStorage();
    this.addButton.addEventListener('click', () => this.addBook());
  }

  loadBooksFromLocalStorage() {
    if (localStorage.getItem('Added books') !== null) {
      this.addedBooks = JSON.parse(localStorage.getItem('Added books'));
      this.displayBooks();
    }
  }

  addBook() {
    if (this.title.value.length !== 0) {
      this.addedBooks.push({
        Title: this.title.value,
        Author: this.author.value,
      });
      localStorage.setItem('Added books', JSON.stringify(this.addedBooks));
      this.displayBooks();
      this.clearEntries();
    }
  }

  removeBook(id) {
    this.addedBooks = this.addedBooks.filter((book) => book.Title !== id);
    localStorage.setItem('Added books', JSON.stringify(this.addedBooks));
    this.displayBooks();
  }

  clearEntries() {
    this.title.value = '';
    this.author.value = '';
  }

  displayBooks() {
    this.booksSection.innerHTML = '';
    this.addedBooks.forEach((book, index) => {
      const newBookLine = document.createElement('div');
      newBookLine.classList.add('newBookSection');
      if (index % 2 === 0) {
        newBookLine.classList.add('evenBook');
      }
      const newBook = document.createElement('p');
      newBook.textContent = `'${book.Title}' by ${book.Author}`;
      newBook.classList.add('newBook');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('Remove');
      removeBtn.setAttribute('id', book.Title);

      removeBtn.addEventListener('click', (event) => {
        this.removeBook(event.target.id);
      });

      newBookLine.appendChild(newBook);
      newBookLine.appendChild(removeBtn);
      this.booksSection.appendChild(newBookLine);
    });
  }
}

const bookManager = new BookManager();
bookManager();
