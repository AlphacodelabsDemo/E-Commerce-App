import React from 'react';
import Navbar from '../../navbar/Navbar';
import ShowProduct from './ShowProduct';
import Profile from './Profile';

const AddProduct = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* section hero */}
        <section className="flex flex-col md:flex-row">
          <div className="h-96 m-6 md:w-2/3 p-8 md:pr-4 bg-gradient-to-tr from-blue-500 to-teal-200 rounded-md flex items-center shadow-2xl">
            <div>
              <h2 className="text-blue-900 text-4xl">ShopXpress</h2>
              <p className="text-grey-200 mt-4 capitalize font-thin tracking-wider leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore?
              </p>
              <a
                href="#d"
                className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
              >
                add product
              </a>
            </div>
          </div>
          <Profile className="md:w-1/2  h-8" />
        </section>
        <ShowProduct />
        <ShowProduct />
        <ShowProduct />
      </main>
    </>
  );
};

export default AddProduct;


// import React from 'react';
// import Navbar from '../../navbar/Navbar';
// import ShowProduct from './ShowProduct';
// import Profile from './Profile';

// const AddProduct = () => {
//   return (
//     <>
//     <Navbar/>
    
// <main>
//   {/* <!-- section hero --> */}
//   <section>
//    {/* <div className="bg-gray-100  sm:grid grid-cols-5 grid-rows-2 px-4  py-6   min-h-full w-auto lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4"> */}


//     <div className="h-96 col-span-4 bg-gradient-to-tr from-blue-500 to-teal-200 rounded-md flex items-center shadow-2xl">
//       <div className="ml-20 w-80">
//       <h2 className="text-blue-900 text-4xl">ShopXpress</h2>
//       <p className="text-grey-200 mt-4 capitalize font-thin tracking-wider leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore?</p>

//       <a href="#d" className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">add product</a>
//       </div>

//     </div>
//     <Profile/>
    
   
    
       
      
   
//     {/* </div> */}
//     <ShowProduct/>
    
    
   
//   </section>
 

// </main>
//     </>
//   )
// }

// export default AddProduct
