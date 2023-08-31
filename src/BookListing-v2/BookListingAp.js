import { useState } from "react";
import Form from "./components/Form";
import Books from "./components/Books";
import './mainApp.css'

// Function that gets books from localStorage
function getLocalStorageHandler() {
	let booksBrowserData = localStorage.getItem("Booklist");

	if (booksBrowserData) {
		booksBrowserData = JSON.parse(booksBrowserData);
	} else {
		booksBrowserData = [];
	}
	return booksBrowserData;
}

// Function that adds books into the localStorage
function setLocalStorageHandler(books) {
	localStorage.setItem("Booklist", JSON.stringify(books));
}

const BookListingApp = () => {
	const [bookList, setBookList] = useState(getLocalStorageHandler());
	const [editBook, setEditBook] = useState(null);

	// Function to get BookItem from the Form Component inside the BookList-State
	function addBookHandler(bookItem) {
		const books = [bookItem, ...bookList];
		setBookList(books);
		setLocalStorageHandler(books);
	}

	// function to remove a book from the booklist
	function deletebook(bookID) {
		const filteredBooks = bookList.filter((book) => book.id !== bookID);
		setBookList(filteredBooks);
		setLocalStorageHandler(filteredBooks);
	}

	function deleteAllBooks() {
		setBookList([]);
		setLocalStorageHandler([]);
	}

	function checkBookHandler(bookID) {
		const checkedBookList = bookList.map((book) => {
			if (book.id === bookID) {
				let checkedBook = { ...book, checked: !book.checked };
				return checkedBook;
			}
			return book;
		});

		setBookList(checkedBookList);
		setLocalStorageHandler(checkedBookList);
	}

	// Function called when edit button is clicked
	function editBookHandler(bookID) {
		const selectedBook = bookList.find((bookItem) => bookItem.id === bookID);
		// console.log(selectedBook);
		setEditBook(selectedBook);
	}

	return (
		<div className="container">
			<div className="main">
				<h1 className="header">My BookList</h1>
				<Form
					addBook={addBookHandler}
					editBook={editBook}
					setEditBook={setEditBook}
					bookList={bookList}
					setBookList={setBookList}
					setLocalStorageHandler={setLocalStorageHandler}
				/>
				<Books
					bookList={bookList}
					setBookList={setBookList}
					deleteBookProps={deletebook}
					deleteAllBooksProps={deleteAllBooks}
					checkBookHandlerProps={checkBookHandler}
					editBookHandler={editBookHandler}
				/>
				{bookList.length > 0 && (
					<button className="del-btn" onClick={deleteAllBooks}>
						delete all books
					</button>
				)}
			</div>
			<footer>Copyright © Atomdev, 2023</footer>
		</div>
	);
};

export default BookListingApp;
