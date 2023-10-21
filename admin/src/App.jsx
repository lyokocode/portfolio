import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, NewBlog, Projects, Categories, Editor, NewCategory, NewProject, NotFound } from './pages'
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

            <Route path="/categories"  >
              <Route index element={<Categories />} />
              <Route path='create' element={<NewCategory />} />
            </Route>

            <Route path="/projects"  >
              <Route index element={<Projects />} />
              <Route path='create' element={<NewProject />} />
            </Route>


            <Route path="/editor" element={<Editor />} />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App
