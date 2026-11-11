import { useState } from 'react';
import CourseModal from './components/CourseModal/CourseModal';
import { courses } from './data/courses';
import styles from './App.module.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CourseList from './components/CourseList/CourseList';

function App() {
	const [selectedCourse, setSelectedCourse] = useState(null);
	return (
		<div className={styles.appShell}>
			<Header />
			<main className={styles.main}>
				<CourseList courses={courses} onCourseSelect={setSelectedCourse} />
			</main>
			<Footer />
			<CourseModal
				course={selectedCourse}
				onClose={() => setSelectedCourse(null)}
			/>
		</div>
	);
}

export default App;
