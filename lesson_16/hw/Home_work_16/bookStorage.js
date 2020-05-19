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
    Storage.getBooks().forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td> 
        <button bookId=${book.id} class='delete btn btn-danger btn-sm'>x</button>
      </td>
    `;

    list.append(row);
  }

  static deleteBookFromList(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
      const bookId = element.getAttribute("bookId");
      Storage.remove(bookId);
    }
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
  }

  static message(message, color) {
    const item = document.querySelector(".message");
    if (item) {
      item.remove();
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    const messageLocation = document.querySelector("#book-form");
    const messageElement = document.createElement("div");
    messageElement.className = `message btn btn-block btn-${color}`;
    messageElement.innerText = message;
    messageElement.style = "position: fixed; top: 5px; left: 0";
    messageLocation.before(messageElement);

    timerId = setTimeout(() => {
      const item = document.querySelector(".message");
      if (item) {
        item.remove();
      }
    }, 3000);
  }

  static deleteMessageOnClick(element) {
    if (element.classList.contains("message")) {
      element.remove();
    }
  }
}

// Хранилище
class Storage {
  static getBooks() {
    if (!localStorage.getItem("books")) {
      localStorage.setItem("books", JSON.stringify([]));
      return [];
    }
    return JSON.parse(localStorage.getItem("books"));
  }

  static addBook(book) {
    const books = JSON.parse(localStorage.getItem("books"));
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    UI.message("добавление новой книги", "success");
  }

  static remove(bookId) {
    const books = JSON.parse(localStorage.getItem("books"));
    const newBooks = books.filter((item) => item.id != bookId);
    localStorage.setItem("books", JSON.stringify(newBooks));
    UI.message("Удаление книги", "warning");
  }
}

// EVENTS

// начальная загрузка элементов
document.addEventListener("DOMContentLoaded", UI.displayAllBooks);

// добавление нового элемента
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;

  if (!regexpYear.test(year) || !regexpText.test(title) || !regexpText.test(author)) {
    UI.message("Некорректный ввод пользователя", "danger");
    return;
  }

  const newBook = new Book(title, author, year);

  Storage.addBook(newBook);

  UI.addBookToList(newBook);

  UI.clearForm();
});

// удаление элемента
document.querySelector(".container").addEventListener("click", (e) => {
  UI.deleteBookFromList(e.target);
  UI.deleteMessageOnClick(e.target);
});

// Глобальные переменные
let timerId = 0;
const regexpYear = /\d{4}/;
const regexpText = /^[a-zа-яё\s]+$/iu
;
