import { 
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'

import Homepage from './pages/home/Homepage';
import Nopage from './pages/noPage/Nopage';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Homepage />}/>
          <Route path='/*' element={<Nopage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
