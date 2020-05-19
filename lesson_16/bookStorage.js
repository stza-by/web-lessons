// book Class
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.id = Math.round(Math.random() * 1000);
  }
}

// UI Class: Represents UI Actions
class UI {
  static displayBooks() {
    Store.getBooks().forEach(book => {
      UI.addBookToList(book);
    })
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.year}</td>
     <td><button bookId=${book.id} class='delete btn btn-danger btn-sm'>X</button></td>`;

    list.append(row);
  }

  static deleteBookFromList(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();

      Store.removeBook(element.getAttribute('bookId'));

      UI.showMessage('Книга была удалена', 'info');
    }
  }

  static clearFromFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = ' ';
  }

  static showMessage(messageText, messageColor) {
    const messageContainer = document.createElement('div');
    messageContainer.innerText = messageText;

    // success, danger 
    messageContainer.className = `alert alert-${messageColor}`;

    if (document.querySelector('.alert')) document.querySelector('.alert').remove();

    document.querySelector('#book-form').before(messageContainer);

    setTimeout(() => {
      messageContainer.remove();
    }, 3000);
  }
}

// Book Storage
class Store {

  static getBooks() {
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify([]));

      return [];
    }

    return JSON.parse(localStorage.getItem('books'));
  }

  static addBook(book) {
    const books = JSON.parse(localStorage.getItem('books'));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(bookId) {
    console.log(bookId);

    const books = JSON.parse(localStorage.getItem('books'));

    books.forEach((book, index) => {
      if (book.id === Number(bookId)) {
        books.splice(index, 1);
      }
    })

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// EVENTS

// Event: display all books after loading
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a new book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const year = document.querySelector('#year').value;

  const newBook = new Book(title, author, year);

  // add new book into table
  UI.addBookToList(newBook);

  // add book to localStorage 
  Store.addBook(newBook);

  // Clear fields
  UI.clearFromFields();

  // Show message
  UI.showMessage('Книга была добавлена', 'success');
})

// Event: Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBookFromList(e.target);
})