import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexs } from './Authprovider'
import Swal from 'sweetalert2'
const Register = () => {
    const {regi,profile,setphoto,photo2,setnames} =useContext(contexs)
    console.log(regi)
    const handelregister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/.test(password)){
          return Swal.fire({
            icon: "error",
            title: "Oops... reload",
            text: " Your password must be  6 character,capital letter &special letter example bbA@ac",
          });
        }

      
        photo2(photo)
        setnames(name)
    
        console.log(name,email,photo,password)
        // regi call
        regi(email,password)
        .then(result => {
            profile(name,photo)
            .then(result => console.log('yes',result.user,name,photo))
            .catch(error => console.log(error))
            console.log(result.user)
        })
       .catch(error =>{
        console.log(error.message)
       })
    }
        

  return (
    <div>
      <h1>Register</h1>



      <div className="hero  mt-40 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelregister} className="card-body">
            <div className="form-control">
            <p className='text-5xl font-bold'>Register</p>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>


            <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Email" className="input input-bordered" required />



             


              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />



            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Register</button>
              <p>If you have  Account. Go <Link className='text-blue-800' to="/login">Login</Link></p>
    
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
