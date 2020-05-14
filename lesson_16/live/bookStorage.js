// book Class
class Book {
  constructor(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;


    this.id = Math.round(Math.random() * 100000000);
  }
}

// UI class: класс хранящий UI действия
class UI {

  static displayAllBooks() {
    Storage.getBooks().forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td> 
        <button bookId=${book.id} class='delete btn btn-danger btn-sm'>x</button>
      </td>
    `

    list.append(row);
  }

  static deleteBookFromList(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();

      const bookId = element.getAttribute('bookId');

      console.log(bookId);
    }

  }

  static clearForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = '';
  }
}


// Хранилище
class Storage {

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

  static remove() {

  }
}


// EVENTS

// начальная загрузка элементов
document.addEventListener('DOMContentLoaded', UI.displayAllBooks)

// добавление нового элемента
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const year = document.querySelector('#year').value;

  const newBook = new Book(title, author, year);

  Storage.addBook(newBook);

  UI.addBookToList(newBook);

  UI.clearForm();
})

// удаление элемента
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBookFromList(e.target);
})

