const title = document.getElementById('Title');
const author = document.getElementById('Author');
const addButton = document.getElementById('AddButton');
const booksSection = document.getElementById('Books-section');
const addedBooks = [];

const addingBooksFunction = () => {
  if (title.value.length !== 0) {
    const addedBooks = JSON.parse(localStorage.getItem('Added books'));
    addedBooks.push({ Title: title.value, Author: author.value });
    localStorage.setItem('Added books', JSON.stringify(addedBooks));
  }
};

const cleaningEntries = () => {
  title.value = '';
  author.value = '';
};

const removingBookFunction = (id) => {
  const booksArray = JSON.parse(localStorage.getItem('Added books'));
  const updatedArray = booksArray.filter((book) => book.Title !== id);

  localStorage.setItem('Added books', JSON.stringify(updatedArray));
};

if (localStorage.getItem('Added books') === null) {
  localStorage.setItem('Added books', JSON.stringify(addedBooks));
} else {
  const addedBook = JSON.parse(localStorage.getItem('Added books'));
  addedBook.forEach((book) => {
    const newTitle = document.createElement('p');
    newTitle.textContent = book.Title;
    const newAuthor = document.createElement('p');
    newAuthor.textContent = book.Author;
    const horizontalLine = document.createElement('hr');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('Remove');
    removeBtn.setAttribute('id', book.Title);

    removeBtn.addEventListener('click', (event) => {
      removingBookFunction(event.target.id);
      window.location.reload();
    });

    booksSection.appendChild(newTitle);
    booksSection.appendChild(newAuthor);
    booksSection.appendChild(removeBtn);
    booksSection.appendChild(horizontalLine);
  });
}

addButton.addEventListener('click', () => {
  if (title.value.length !== 0) {
    addingBooksFunction();
  }
  cleaningEntries();
  window.location.reload();
});
