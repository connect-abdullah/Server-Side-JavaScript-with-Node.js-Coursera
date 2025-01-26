const fs = require('fs');

const loadBooks = () => {
    const books = fs.readFileSync('books.json', 'utf8');

    let obj = JSON.parse(books);
    return obj;
}

const addBook = (title, author) => {
    const books = loadBooks();

    let duplicateBook = books.filter((book) => book.title === title);

    if(duplicateBook.length === 0){
        books.push({title, author});
        console.log('Book added');
        saveBooks(books);
    } else {
        console.log('Book already exists');
    }
}

const saveBooks = (books) => {
    const data = JSON.stringify(books);
    fs.writeFileSync('books.json', data);
    console.log('Book File Updated');
}

const getAllBooks = () => {
    const books = loadBooks();
    const bookList = books.forEach((book) => {
        console.log(book.title);
    })
    return bookList;
}

const getABook = (title) => {
    const books = loadBooks();
    const bookTitle = books.find((book) => book.title === title);
    return console.log("Title: " + bookTitle.title + " Author: " + bookTitle.author);
}

const removeBook = (title) => {
    const books = loadBooks();
    const findIndex = books.findIndex((book) => book.title === title);
    if(findIndex !== -1){
        books.splice(findIndex, 1);
        console.log('Book removed');
        saveBooks(books);
        
    } else {
        console.log('Book not found');
    }
}

module.exports = {addBook, getAllBooks, getABook, removeBook}

