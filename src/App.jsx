import './App.css'
import Footer from './components/Footer/Footer'
import StudentList from './components/StudentList/StudentList'
import { students } from './data/students'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Учебный проект React</p>
        <h1>Students CRM</h1>
        <p>Локальный список студентов и их статусов обучения.</p>
      </header>

      <main className="app-content">
        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  )
}

export default App
