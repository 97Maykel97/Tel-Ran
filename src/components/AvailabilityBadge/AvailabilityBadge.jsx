import styles from './AvailabilityBadge.module.scss';

function AvailabilityBadge({ copies }) {
	const isAvailable = copies > 0;

	return (
		<div className={isAvailable ? styles.available : styles.unavailable}>
			{isAvailable ? 'Доступна' : 'Нет в наличии'}
		</div>
	);
}

export default AvailabilityBadge;
