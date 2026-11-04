const studentName = 'Анна Смирнова';
const studentAge = 22;
const studentCity = 'Тель-Авив';
const courseName = 'Frontend-разработка';
const completedLessons = 34;
const totalLessons = 110;
const remainingLessons = totalLessons - completedLessons;

const profile = (
	<main className="profile">
		<h1>Мой учебный профиль</h1>
		<dl className="profile__details">
			<div><dt>Имя</dt><dd>{studentName}</dd></div>
			<div><dt>Возраст</dt><dd>{studentAge}</dd></div>
			<div><dt>Город</dt><dd>{studentCity}</dd></div>
			<div><dt>Курс</dt><dd>{courseName}</dd></div>
			<div><dt>Пройдено занятий</dt><dd>{completedLessons}</dd></div>
			<div><dt>Осталось занятий</dt><dd>{remainingLessons}</dd></div>
		</dl>
	</main>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(profile);
