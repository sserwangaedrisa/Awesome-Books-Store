const title = document.getElementById('Title');
const author = document.getElementById('Author');
const addButton = document.getElementById('AddButton');
const booksSection = document.getElementById('Books-section');

const keys = Object.keys(localStorage);

keys.forEach((key) => {
  const newTitle = document.createElement('p');
  newTitle.textContent = JSON.parse(localStorage.getItem(key)).Title;
  const newAuthor = document.createElement('p');
  newAuthor.textContent = JSON.parse(localStorage.getItem(key)).Author;
  const horizontalLine = document.createElement('hr');
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('Remove');
  removeBtn.setAttribute('id', key);

  removeBtn.addEventListener('click', () => {
    localStorage.removeItem(removeBtn.id);
    window.location.reload();
  });

  booksSection.appendChild(newTitle);
  booksSection.appendChild(newAuthor);
  booksSection.appendChild(removeBtn);
  booksSection.appendChild(horizontalLine);
});

addButton.addEventListener('click', () => {
  if (title.value.length !== 0) {
    const inputs = {
      Title: title.value,
      Author: author.value,
    };

    localStorage.setItem(title.value, JSON.stringify(inputs));
    const newTitle = document.createElement('p');
    newTitle.textContent = JSON.parse(localStorage.getItem(title.value)).Title;
    const newAuthor = document.createElement('p');
    newAuthor.textContent = JSON.parse(
      localStorage.getItem(title.value).Author
    );
    const horizontalLine = document.createElement('hr');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('Remove');
    removeBtn.setAttribute('id', title.value);

    removeBtn.addEventListener('click', () => {
      localStorage.removeItem(removeBtn.id);
      window.location.reload();
    });

    booksSection.appendChild(newTitle);
    booksSection.appendChild(newAuthor);
    booksSection.appendChild(removeBtn);
    booksSection.appendChild(horizontalLine);
  }
  title.value = '';
  author.value = '';
});
