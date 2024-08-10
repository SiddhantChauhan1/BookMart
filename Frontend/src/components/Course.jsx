import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-10 px-4'>
        <div className=' items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            Lorem ipsum dolor <span className='text-pink-500'>sit.</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae eius sapiente ducimus quam repellat nihil accusamus doloremque reiciendis fugiat maxime illum perspiciatis. Temporibus ea quia rerum tempore sed beatae? Dolor porro ex iste voluptates. Repellendus inventore ipsam in rerum, illum, nihil quia, labore fugit voluptas nulla dicta ex repellat similique laudantium quam distinctio necessitatibus mollitia amet hic aut ut!
          </p>
          <button className='mt-6 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-200 cursor-pointer'>
            Back
          </button>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course

