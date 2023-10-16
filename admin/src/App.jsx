import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, Projects } from './pages'
import Layout from './utils/Layout'
import { PrivateRoutes } from './utils/PrivateRoute'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
