import { useState } from 'react'
import '../styles/login.css'
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault()
  }

  const handleChange = (e) => {

    if(e.target.type === 'password')  setPassword(e.target.value);
    else  setEmail(e.target.value);

  };


  return (
    <div className="form-container">
      <form>
      <div className='form-innercontainer'>
      <h3 className='formheader'><center>Login in to User Management</center></h3>
      <div className='form-components'>
        <label >Email</label>
        <input type="text" value={email} onChange={handleChange} className='emailInput' name='email' placeholder = 'asirmsamdm@gmail.com' />
        <label >Password</label>
        <input type="password" value={password} onChange={handleChange} className='loginpass' name='password' />
        <div><center><button onClick={submit} className='submit'>SEND</button></center></div>
      </div>
      </div>
      </form>
    </div>
  )

}

export default Login
