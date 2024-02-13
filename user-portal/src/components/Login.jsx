import { useForm } from 'react-hook-form'
import {  DevTool } from '@hookform/devtools'
import '../styles/login.css'
function Login() {

  const form = useForm();
  const {register, control, handleSubmit, formState} = form;
  const { errors } = formState;

  const submit = (data) => {
    event.preventDefault()
    console.log(data)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} noValidate>
      <div className='form-innercontainer'>
      <h3 className='formheader'><center>Login in to User Management</center></h3>
      <div className='form-components'>
        <label htmlFor='email'>Email</label>
        <input type="text" className='emailInput' id="email" {...register('email',{
          required:"email is mandatory", pattern : {
            value:/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
            message : 'Please enter a valid email address',
          }
        })} placeholder = 'asirmsamdm@gmail.com' />
        <p className='error'>{errors.email?.message}</p>
        <label htmlFor='password'>Password</label>
        <input type="password"  className='loginpass' id='password' {...register('password',{
          required:"password is mandatory",
            pattern : {
              value:  /^\d+$/,
              message : "Enter Valid Password Format" 
            }
        })}/>
          <p className='error'>{errors.password?.message}</p>
        <div><center><button className='submit'>SEND</button></center></div>
      </div>
      </div>
      </form>
      <DevTool control={control}/>
    </div>
  )

}

export default Login
