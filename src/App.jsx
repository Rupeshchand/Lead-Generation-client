import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LeadForm from './components/LeadForm'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/lead" element={<LeadForm/>} />
    </Routes>
    <LeadForm/>
    </>
  )
}

export default App
