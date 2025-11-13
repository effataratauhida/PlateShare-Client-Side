import React, { useEffect, useState } from 'react';
import bannerI from '../../assets/a.png'
import { Link, useLoaderData } from 'react-router-dom';



const AvailableFoods = () => {

    //const foods = useLoaderData();
    //console.log(data)

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
    fetch('https://plate-share-server-delta.vercel.app/foodData')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false); 
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

   if (loading) {
    return (
        <div className="flex justify-center items-center h-screen bg-[#d2e7d0] py-20">
            <p className="text-4xl font-semibold text-[#1d5008]">
                L <span className="loading loading-spinner loading-xl"></span> ading...</p>
        </div>
    );
}

    return (
        
        <div>
            <title>Available Foods</title>
            <div className=" relative mb-10">
                    <img src={bannerI} alt="" className='h-[300px] w-full ' />
                    <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
                        <h1 className=' text-[#edf8e9] text-3xl md:text-4xl font-bold mt-0'>Available Foods</h1>
                        <p className=' text-[#edf8e9] mt-5 md:text-lg text-base font-medium'>Explore freshly donated meals and food items shared by our generous contributors. Request any item and help reduce food waste while feeding someone in need</p>
                        
                        {/* all the cards */}
                 </div>
        </div>

        {/* cards */}
        <div data-aos="fade-up"
        className='max-w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 pb-20 '>
            {foods?.length > 0 ? (
                foods.map((food) => (
                <div key={food._id} className='bg-[#edf8e9] p-4 hover:scale-105 rounded-sm shadow-lg'>

                    <img src={food.food_image} alt="" className='w-full max-h-[250px] rounded-sm' />

                    <h2 className='mt-4 font-bold text-xl text-[#005a32]'>{food.food_name}</h2>
                    

                     {/* donator name , img */}
                    <div className='flex flex-row items-center justify-between '>
                        <h2 className=' font-bold text-base text-[#005a32]'>Donator's Name: <span className='font-medium text-base text-[#005a32] '>{food.donator_name}</span></h2>
                        <img src={food.donator_image} alt="" className='w-12 h-12 rounded-full'/>
                    </div>

                    <h3 className=' font-bold text-base text-[#005a32] '>Quantity: <span className='font-medium text-base text-[#005a32] '>{food.food_qty}</span></h3>

                    <h3 className='mt-2 font-bold text-base text-[#005a32] '>Pickup Location: <span className='font-medium text-base text-[#005a32] '>{food.pickup_location}</span>
                    </h3>

                    <h3 className='mt-2 font-bold text-base text-[#005a32] '>Expire Date: <span className='font-medium text-base text-[#005a32] '>{food.expire_date}</span></h3>

                    
                {/* view details */}
                 <button className='mt-4 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-6 w-full cursor-pointer 
                        rounded-sm font-semibold text-sm sm:text-base bg-[#238b45] hover:bg-transparent
                        border-[#238b45] hover:border-[#005a32] border-2 hover:scale-105
                        text-white hover:text-[#005a32]'>
                            <Link to={`/food/${food._id}`}>View Details</Link></button>  
                </div>
                ))
            ) : (
                <p>Loading</p>
            )
        }

       
        </div>
        </div>
        
    );
};

export default AvailableFoods;