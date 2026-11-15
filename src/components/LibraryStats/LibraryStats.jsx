import styles from './LibraryStats.module.scss';

function LibraryStats({ books }) {
	const availableBooks = books.filter(book => book.copies > 0).length;

	return (
		<section className={styles.stats} aria-label='Library statistics'>
			<div className={styles.statItem}>
				<span className={styles.statValue}>{books.length}</span>
				<span className={styles.statLabel}>Всего книг в каталоге</span>
			</div>
			<div className={styles.statItem}>
				<span className={styles.statValue}>{availableBooks}</span>
				<span className={styles.statLabel}>Доступны для выдачи</span>
			</div>
		</section>
	);
}

export default LibraryStats;
