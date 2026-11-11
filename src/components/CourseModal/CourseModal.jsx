import styles from './CourseModal.module.scss';

function CourseModal({ course, onClose }) {
	if (!course) {
		return null;
	}

	return (
		<div className={styles.overlay} onClick={onClose}>
			<section
				className={styles.modal}
				role='dialog'
				aria-modal='true'
				aria-labelledby='course-modal-title'
				onClick={event => event.stopPropagation()}
			>
				<button
					className={styles.closeButton}
					type='button'
					onClick={onClose}
					aria-label='Close modal'
				>
					×
				</button>

				<h2 id='course-modal-title'>{course.title}</h2>

				<p>Преподаватель: {course.teacher}</p>
				<p>Продолжительность: {course.duration} часов</p>
				<p>Стоимость: {course.price} USD</p>

				{course.isAvailable ? (
					<button className={styles.enrollButton} type='button'>
						Enroll in course
					</button>
				) : (
					<p className={styles.closedMessage}>Enrollment for this course is closed.</p>
				)}
			</section>
		</div>
	);
}

export default CourseModal;
