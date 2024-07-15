import Aside from './components/Aside.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduction from './pages/Introduction.tsx'
import Dashboard from './pages/Dashboard.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import PrivateRoute from './components/PrivateRoute.tsx'

function App() {

  return (
    <>
      <Router>
        <Aside />
          <Routes>
          <Route path='/' element={
          <PrivateRoute>
            <Introduction />
          </PrivateRoute>
        }/>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App