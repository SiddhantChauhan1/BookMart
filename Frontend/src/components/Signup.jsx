import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:3004/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success('Login Successful!');
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((error) => {
      if(error.response){
        console.log(error);
        toast.error('Error: ' + error.response.data.message);
      }
    })
  }
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <div className='border px-6 md:px-20 py-16 rounded-md shadow-md'>
        <h3 className="font-bold text-xl">Register for BookMart</h3>
        <div className='mt-5'>
          <span>Username: </span>
          <br />
          <input 
            type="text"
            placeholder='Enter Full name'
            className='mt-2 w-80 px-3 py-2 border rounded-md outline-none 
              dark:text-white bg-transparent'
            {...register("name", { required: true })}
          />
          <br />
          {errors.username && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4'>
          <span>Email: </span>
          <br />
          <input 
            type="email"
            placeholder='Enter email'
            className='mt-2 w-80 px-3 py-2 border rounded-md outline-none
              dark:text-white bg-transparent'
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4'>
          <span>Password: </span>
          <br />
          <input 
            type="password"
            placeholder='Enter password'
            className='mt-2 w-80 px-3 py-2 border rounded-md outline-none
              dark:text-white bg-transparent'
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4'>
          <button className='bg-pink-500 px-5 py-2 rounded-md text-white hover:bg-pink-700 duration-200'>
            Sign up
          </button>
          <p className='mt-2'>Already registered? {}
              <Link to="/" className='underline text-blue-500 font-semibold cursor-pointer'>
                Log in
              </Link>{" "}
            </p>
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default Signup
