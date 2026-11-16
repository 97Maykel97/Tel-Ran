import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

function BookList({ books, genre, id }) {
	const filteredBooks = genre
		? books.filter(book => book.genre === genre)
		: books;

	return (
		<section className={styles.section} id={id}>
			{genre && <h2 className={styles.sectionTitle}>{genre}</h2>}

			{filteredBooks.length === 0 ? (
				<p className={styles.emptyMessage}>
					{genre
						? 'В выбранной категории книги отсутствуют.'
						: 'В библиотеке пока нет книг.'}
				</p>
			) : (
				<div className={styles.booksGrid}>
					{filteredBooks.map(book => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			)}
		</section>
	);
}

export default BookList;
