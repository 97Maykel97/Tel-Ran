import './StudentStatus.css'

function StudentStatus({ isActive }) {
  const statusClass = isActive ? 'status status--active' : 'status status--paused'

  return (
    <p className={statusClass}>
      <span className="status__dot" aria-hidden="true" />
      Обучение: {isActive ? 'Продолжается' : 'Приостановлено'}
    </p>
  )
}

export default StudentStatus
