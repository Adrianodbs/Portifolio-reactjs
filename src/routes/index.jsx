import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}
