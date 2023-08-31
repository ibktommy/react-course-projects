import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Form = ({
	addBook,
	editBook,
	setEditBook,
	bookList,
	setBookList,
	setLocalStorageHandler,
}) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState(null);

	function titleHandler(e) {
		setTitle(e.target.value);
	}

	function authorHandler(e) {
		setAuthor(e.target.value);
	}

	function imagehandler(e) {
		setImage(e.target.files[0]);
	}

	useEffect(() => {
		if (editBook) {
			setTitle(editBook.title);
			setAuthor(editBook.author);
			setImage(editBook.image);
		} else {
			setAuthor("");
			setTitle("");
			setImage(null);
		}
	}, [setTitle, setAuthor, setImage, editBook]);

	function formSubmitHandler(e) {
		e.preventDefault();

		if (title.trim().length === 0 || author.trim().length === 0) {
			alert("Empty spaces are not valid, please use valid words");
			return;
		}
		if ((image === null || image.length) === 0) {
			alert("You need to upload the book image");
		}

		if (!editBook) {
			let newBookItem = {
				id: nanoid(),
				title: title,
				author: author,
				image: URL.createObjectURL(image),
				checked: false,
			};

			addBook(newBookItem);
			setAuthor("");
			setTitle("");
			setImage(null);
		} else {
			const newBookList = bookList.map((bookItem) =>
				bookItem.id === editBook.id
					? {
							id: editBook.id,
							author: author,
							title: title,
							image: URL.createObjectURL(image),
							checked: editBook.checked,
					  }
					: bookItem,
			);
			setBookList(newBookList);
			setLocalStorageHandler(newBookList)
			setEditBook(null);
		}
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-input">
				<input
					type="text"
					id="title"
					placeholder="Enter Book Title"
					value={title}
					onChange={titleHandler}
				/>
			</div>
			<div className="form-input">
				<input
					type="text"
					id="author"
					placeholder="Enter Book Author"
					value={author}
					onChange={authorHandler}
				/>
			</div>
			<div className="form-input">
				<input
					type="file"
					accept="image/*"
					id="image"
					onChange={imagehandler}
				/>
			</div>
			<button className="form-btn" type="submit">
				add books
			</button>
		</form>
	);
};

export default Form;
