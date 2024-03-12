import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, NotFound, Projects, SingleBlog } from '@/pages'
import Layout from '@/utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<SingleBlog />} />

          <Route path="/projects" element={<Projects />} />

        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
