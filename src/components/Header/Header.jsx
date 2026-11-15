import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				<span className={styles.brandMark} aria-hidden='true'>ML</span>
				<div>
					<p className={styles.eyebrow}>Electronic catalog</p>
					<h1 className={styles.brandName}>My Library</h1>
				</div>
			</div>
		</header>
	);
}

export default Header;
