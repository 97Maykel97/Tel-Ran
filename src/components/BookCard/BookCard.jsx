import AvailabilityBadge from '../AvailabilityBadge/AvailabilityBadge';
import Card from '../Card/Card';
import styles from './BookCard.module.scss';

function BookCard({ book }) {
	return (
		<Card>
			<article className={styles.bookCard}>
				<h3>{book.title}</h3>
				<p className={styles.author}>{book.author}</p>

				<div className={styles.meta}>
					<span>{book.year}</span>
					<span>{book.genre}</span>
				</div>
				<p className={styles.copies}>Copies: {book.copies}</p>

				{book.year < 2000 && (
					<p className={styles.classic}>Классическое издание</p>
				)}

				<AvailabilityBadge copies={book.copies} />
			</article>
		</Card>
	);
}

export default BookCard;
