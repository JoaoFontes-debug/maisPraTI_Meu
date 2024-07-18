import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' Component={PageOne} />
          <Route path='/dois' Component={PageTwo} />
          <Route path='/tres' element={<Navigate to='/' />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;