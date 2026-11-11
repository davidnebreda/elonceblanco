
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/home/HomeView'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  )
}

export default App
