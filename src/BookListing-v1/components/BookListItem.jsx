const BookListingItem = ({ bookItemProps, deleteItemProps}) => {
	const { title, author, image, id } = bookItemProps;

	return (
		<article className="book-article">
			<div className="book-article-flex">
				<div className="book-image">
					<img src={image} alt={title} />
				</div>

				<div className="book-info">
					<h4 className="book-title">{title}</h4>
					<p className="book-author">{author}</p>
				</div>
			</div>

			<p className="delete-one hidden" onClick={() => deleteItemProps(id)}>
				X
			</p>
		</article>
	);
};

export default BookListingItem;
