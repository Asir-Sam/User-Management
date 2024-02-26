import { NavLink } from 'react-router-dom'
function SampleHome() {
  return (
    <div>
        <h1>Hello World</h1>
        <NavLink to='/login'>Login Page</NavLink>
    </div>
    
  )
}

export default SampleHome
