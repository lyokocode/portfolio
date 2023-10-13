import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Projects, SingleBlog } from './pages'
import Layout from './utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />

          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
