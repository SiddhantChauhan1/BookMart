import React from 'react'

function Cards({item}) {
  return (
    <div className='mt-4 my-3 p-3 hover:scale-105 duration-200'>
      <div className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:border">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <h4 className="text-l">{item.author}</h4>
          <p>{item.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline  px-4 py-3 ">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-4 py-3 duration:200 cursor-pointer">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
