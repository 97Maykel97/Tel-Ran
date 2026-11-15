import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Учебный проект React — электронная библиотека</p>
			<div className={styles.footerContent}>
				<p>© 2026 My Library</p>
				<p>Built with React</p>
			</div>
		</footer>
	);
}

export default Footer;
