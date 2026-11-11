import styles from './AvailabilityBadge.module.scss';

function AvailabilityBadge({ isAvailable }) {
	const availabilityClass = isAvailable ? styles.available : styles.unavailable;
	const label = isAvailable ? 'Available' : 'Enrollment closed';

	return (
		<span className={`${styles.badge} ${availabilityClass}`}>
			<span className={styles.dot} aria-hidden="true" />
			{label}
		</span>
	);
}

export default AvailabilityBadge;
