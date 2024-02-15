import './App.css'
import { Routes , Route } from 'react-router-dom'
import  SampleHome  from './components/SampleHome'
import  Login  from './components/Login'
function App() {
return (
  <Routes>
    <Route path='/' element={ <SampleHome/> }/>
    <Route path='login' element ={ <Login/> } ></Route>
  </Routes>
)
}

export default App
