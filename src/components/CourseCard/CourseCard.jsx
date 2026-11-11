import AvailabilityBadge from '../AvailabilityBadge/AvailabilityBadge';
import Card from '../Card/Card';
import styles from './CourseCard.module.scss';

function CourseCard({ course, onCourseSelect }) {
	const accentClass = styles[`accent${course.id}`];
	const openCourseModal = () => onCourseSelect(course);

	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openCourseModal();
		}
	}

	return (
		<Card>
			<article
				className={`${styles.courseCard} ${accentClass}`}
				role='button'
				tabIndex={0}
				aria-label={`Open details for ${course.title}`}
				onClick={openCourseModal}
				onKeyDown={handleKeyDown}
			>
				<h2 className={styles.cardTitle}>{course.title}</h2>

				<dl className={styles.courseDetails}>
					<div className={styles.courseDetail}>
						<dt>Teacher</dt>
						<dd>{course.teacher}</dd>
					</div>

					<div className={styles.courseDetail}>
						<dt>Duration</dt>
						<dd>{course.duration} hours</dd>
					</div>

					<div className={styles.courseDetail}>
						<dt>Price</dt>
						<dd>{course.price} USD</dd>
					</div>
				</dl>

				{course.price > 400 && (
					<p className={styles.premiumLabel}>Premium course</p>
				)}

				<AvailabilityBadge isAvailable={course.isAvailable} />
			</article>
		</Card>
	);
}

export default CourseCard;
