import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LibraryStats from './components/LibraryStats/LibraryStats';
import BookList from './components/BookList/BookList';
import { books } from './data/books';
import styles from './App.module.scss';

const genres = [
	'Художественная литература',
	'Учебная литература',
	'Детская литература',
	'Публицистика',
	'Научно-популярная литература',
];

function getGenreId(genre) {
	return `genre-${genre.toLowerCase().replaceAll(' ', '-')}`;
}

function App() {
	return (
		<div className={styles.app}>
			<Header />

			<main className={styles.main}>
				<LibraryStats books={books} />

				<nav className={styles.genreNav} aria-label='Genres'>
					<a href='#all-books'>All books</a>
					{genres.map(genre => (
						<a key={genre} href={`#${getGenreId(genre)}`}>
							{genre}
						</a>
					))}
				</nav>

				<h2>Все книги</h2>
				<BookList books={books} id='all-books' />

				{books.length > 0 &&
					genres.map(genre => (
						<BookList
							key={genre}
							books={books}
							genre={genre}
							id={getGenreId(genre)}
						/>
					))}
			</main>

			<Footer />
		</div>
	);
}

export default App;
