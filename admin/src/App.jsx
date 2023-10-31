import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, Projects, Categories, Editor, NotFound, SingleUser, New, NewBlog } from './pages'
import Layout from './utils/Layout'
import { PrivateRoutes } from './utils/PrivateRoute'
import { Users } from './pages'
import { categoryInputs, projectInputs, userInputs } from './mockData/formSource'

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
              <Route path='create' element={<New inputs={categoryInputs} title="create new category" api="api/categories" />} />
            </Route>

            <Route path="/projects"  >
              <Route index element={<Projects />} />
              <Route path='create' element={<New inputs={projectInputs} title="create new project" api="api/projects" />} />
            </Route>


            <Route path='/users'>
              <Route index element={<Users />} />
              <Route path=":id" element={<SingleUser />} />
            </Route>
            <Route path="/user-create" element={<New inputs={userInputs} title="create new user" api="api/auth/register" />} />


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
