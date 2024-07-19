import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/Home'
            element={<ProtectedRoute isLoggedIn={false} >
              <Home />
            </ProtectedRoute>}
          />
        </Routes>

      </Router>
    </>
  )
}

export default App;