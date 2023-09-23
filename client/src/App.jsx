import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home } from './pages'
import Layout from './utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
