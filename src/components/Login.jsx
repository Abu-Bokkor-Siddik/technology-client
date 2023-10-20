import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexs } from './Authprovider'
import Swal from 'sweetalert2'


const Login = () => {
    const {google,login}=useContext(contexs)
    const handlelogin=(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
       login(email,password)
       .then(result => {
        Swal.fire(
          'Good job!',
          'You successfully log.',
          'success'
        )
        console.log(result.user)
      
      })
       .catch(error =>{

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html:error,
        })
        console.error(error)
       })


    }
// google call
    const googlelog =()=>{
       google()
       .then(result => console.log(result.user))
       .catch(error =>{
        console.error(error)
       })

    }
  return (
    <div>
      




      <div className="hero min-h-screen bg-base-200 dark:bg-black dark:text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-80 lg:w-full max-w-sm shadow-2xl bg-base-100 dark:bg-black dark:text-white dark:shadow-slate-700">
      <form onSubmit={handlelogin} className="card-body ">
        <div className="form-control">
        <p>Login</p>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered"  />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary dark:bg-black dark:text-white">Login</button>

          <p className='my-5'>If you have no Account.Go <Link className='text-blue-800' to="/regist">Register</Link></p>

          <button onClick={googlelog} className='btn bg-blue-500 lg:mx-24 rounded-lg dark:bg-black dark:text-white' >Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
