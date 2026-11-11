import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseList.module.scss';

function CourseList({ courses, onCourseSelect }) {
	if (courses.length === 0) {
		return <p className={styles.emptyMessage}>Курсы не найдены.</p>;
	}
	return (
		<section className={styles.courseList} aria-label='Course list'>
			{courses.map(course => (
				<CourseCard
					key={course.id}
					course={course}
					onCourseSelect={onCourseSelect}
				/>
			))}
		</section>
	);
}

export default CourseList;
