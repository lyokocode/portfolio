import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, NewBlog, Projects, Categories, Editor } from './pages'
import Layout from './utils/Layout'
import { PrivateRoutes } from './utils/PrivateRoute'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/blogs"  >
              <Route index element={<Blogs />} />
              <Route path='create' element={<NewBlog />} />
            </Route>

            <Route path="/categories" element={<Categories />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/editor" element={<Editor />} />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
