import './App.css'
import { Routes , Route } from 'react-router-dom'
import  SampleHome  from './components/SampleHome'
import  Login  from './components/Login'
import Dashboard from './components/Dashboard'
function App() {
return (
  <Routes>
    <Route path='/' element={ <SampleHome/> }/>
    <Route path='login' element ={ <Login/> } ></Route>
    <Route path='dashboard' element ={ <Dashboard/> } ></Route>
  </Routes>
)
}

export default App
