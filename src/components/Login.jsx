import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexs } from './Authprovider'


const Login = () => {
    const {google,login}=useContext(contexs)
    const handlelogin=(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
       login(email,password)
       .then(result => console.log(result.user))
       .catch(error =>{
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
      <h1>login</h1>




      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
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
          <button type='submit' className="btn btn-primary">Login</button>

          <p>If you have no Account.Go <Link className='text-blue-800' to="/regist">Register</Link></p>

          <button onClick={googlelog} className='btn bg-orange-600 mx-24 rounded-lg' >Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login