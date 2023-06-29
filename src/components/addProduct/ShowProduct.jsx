
import React from 'react';

const ShowProduct = () => {

  return (
    <>
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl p-4 mb-4 m-8">
      <img src="https://img.freepik.com/free-psd/realistic-mobile-device-isolated_23-2150427379.jpg?w=900&t=st=1687942920~exp=1687943520~hmac=afd7b5a9f0f1e0c8764b52fdb49af3bb50b6d8271da4629a4da1029b8ae1053d" className="w-40 h-40 object-cover items-center rounded-md md:mr-4"
      alt='productimg'/>
      <div className="flex flex-col flex-grow md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl text-blue-900 font-semibold mb-2">Name</h2>
          <p className="text-gray-600 mb-2">Samsung Galaxy</p>
        </div>
  
        <div >
          <h2 className="text-xl text-blue-900 font-semibold mb-2">Description</h2>
          <p className="text-gray-600 mb-2">discription......</p>
        </div>
        <div>
          <h2 className="text-xl text-blue-900 font-semibold mb-2">Quantity</h2>
          <p className="text-gray-600 mb-2">103</p>
        </div>
        <div>
          <h2 className="text-xl text-blue-900 font-semibold mb-2">Category</h2>
          <p className="text-gray-600 mb-2">Smartphone</p>
        </div>
        <div>
          <h2 className="text-xl text-blue-900 font-semibold mb-2">Price₹</h2>
          <p className="text-gray-600 mb-2">₹2000</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Update
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  </>
  
  
  )
}

export default ShowProduct