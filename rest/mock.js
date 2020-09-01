class Book {
  constructor(id, title, author) {
    this._id = id;
    this._title = title;
    this._author = author;
  }
}

class Library {
  constructor() {
    var b = new Book(123, "A Tale of Two Cities", "Charles Dickens");
    this._books = [b];
    this._reservedBookId = 0;
  }

  getBookByID(id) {
    return this._books.find((book) => {
      if (book._id == id) return book;
    });
  }

  getAllBooks() {
    return this._books;
  }

  addBook(title, author) {
    var book = new Book(this._reservedBookId, title, author);
    this._books.push(book);
    this.increaseReservedBookId();
    return book;
  }

  increaseReservedBookId() {
    this._reservedBookId = this._reservedBookId + 1;
  }
}

module.exports = new Library();
