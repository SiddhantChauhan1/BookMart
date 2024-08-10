import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
      return (
        <>
        <div className='flex h-screen items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className='border px-6 md:px-20 py-16 rounded-md shadow-md'>
            <h3 className="font-bold text-xl">Contact us</h3>
            <div className='mt-5'>
                <span>Username: </span>
                <br />
                <input 
                    type="text"
                    placeholder='Enter your name'
                    className='mt-2 w-80 md:w-96 px-3 py-2 border rounded-md outline-none 
                    dark:text-white bg-transparent'
                    {...register("username", { required: true })}
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
                className='mt-2 w-80 md:w-96 px-3 py-2 border rounded-md outline-none
                  dark:text-white bg-transparent'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-5'>
              <span>Message: </span>
              <br />
              <textarea
                placeholder='Enter Message'
                className='mt-2 w-80 md:w-96 px-3 py-2 border rounded-md outline-none 
                  dark:text-white bg-transparent'
                {...register("messge", { required: true })}
              />
              <br />
              {errors.username && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4'>
              <button className='bg-pink-500 px-5 py-2 rounded-md text-white hover:bg-pink-700 duration-200'>
                Send
              </button>
            </div>
          </div>
          </form>
        </div>
        </>
      )
}

export default Contact
