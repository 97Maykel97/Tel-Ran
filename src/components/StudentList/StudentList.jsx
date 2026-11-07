import StudentCard from '../StudentCard/StudentCard'
import './StudentList.css'

function StudentList({ students }) {
  if (students.length === 0) {
    return <p className="empty-message">Список студентов пока пуст.</p>
  }

  return (
    <section className="student-list" aria-labelledby="students-heading">
      <div className="student-list__heading">
        <div>
          <h2 id="students-heading">Студенты</h2>
          <p>Все записи сохранены локально в массиве.</p>
        </div>
        <p className="student-count">Всего: {students.length}</p>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default StudentList
