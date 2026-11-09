import StudentStatus from '../StudentStatus/StudentStatus';
import './StudentCard.css';

function StudentCard({ student }) {
	const isMinor = student.age < 18;
	const cardClass = isMinor
		? 'student-card student-card--minor'
		: 'student-card';

	return (
		<article className={cardClass}>
			<div className='student-card__topline'>
				<p className='student-card__id'>ID #{student.id}</p>
				{isMinor && (
					<span className='student-card__minor-label'>
						Несовершеннолетний(ая)
					</span>
				)}
			</div>
			<h3>{student.name}</h3>
			<p className='student-card__age'>Возраст: {student.age}</p>
			<p className='student-card__group'>Группа: {student.group}</p>
			<StudentStatus isActive={student.isActive} />
		</article>
	);
}

export default StudentCard;
