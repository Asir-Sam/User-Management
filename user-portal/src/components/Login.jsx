//import { useState } from 'react'
import '../styles/login.css'
function Login() {

  return (
    <div className="form-container">
      <form>
      <div className='form-innercontainer'>
      <h3 className='formheader'><center>Login in to User Management</center></h3>
      <div className='form-components'>
        <label >Email</label>
        <input type="text" className='emailInput' name='email' placeholder = 'asirmsamdm@gmail.com' />
        <label >Password</label>
        <input type="password" className='loginpass' name='password' />
        <div><center><button className='submit'>SEND</button></center></div>
      </div>
      </div>
      </form>
    </div>
  )

}

export default Login
