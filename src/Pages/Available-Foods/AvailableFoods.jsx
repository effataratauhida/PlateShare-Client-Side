import React from 'react';
import bannerI from '../../assets/a.png'
import { useLoaderData } from 'react-router-dom';



const AvailableFoods = () => {

    const foods = useLoaderData();
    //console.log(data)



    return (
        
        <div>
            <div className=" relative mb-10">
                        <img src={bannerI} alt="" className='h-[300px] w-full ' />
                     <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
                        <h1 className=' text-[#edf8e9] text-4xl font-bold mt-0'>Available Foods</h1>
                        <p className=' text-[#edf8e9] mt-5 text-lg font-medium'>Explore freshly donated meals and food items shared by our generous contributors. Request any item and help reduce food waste while feeding someone in need</p>
                        
                        {/* all the cards */}
                 </div>
        </div>

        {/* cards */}
        <div className='max-w-11/12 mx-auto grid grid-cols-3 gap-4 pb-20 '>
            {foods?.length > 0 ? (
                foods.map((food) => (
                <div key={food._id} className='bg-[#edf8e9] p-4  rounded-sm shadow-sm'>

                    <img src={food.food_image} alt="" className='w-full max-h-[250px] rounded-sm' />

                    <h2 className='mt-4 font-bold text-xl text-[#005a32]'>{food.food_name}</h2>

                     {/* donator name , img */}
                    <div className='flex flex-col-reverse sm:flex-row items-center justify-between '>
                        <h2 className=' font-bold text-base text-[#005a32]'>Donator's Name: <span className='font-medium text-base text-[#005a32] '>{food.donator_name}</span></h2>
                        <img src={food.donator_image} alt="" className='w-10 h-10 rounded-full'/>
                    </div>

                    <h3 className=' font-bold text-base text-[#005a32] '>Quantity: <span className='font-medium text-base text-[#005a32] '>{food.food_qty}</span></h3>

                    <h3 className='mt-1 font-bold text-base text-[#005a32] '>Pickup Location: <span className='font-medium text-base text-[#005a32] '>{food.pickup_location}</span>
                    </h3>

                    <h3 className='mt-1 font-bold text-base text-[#005a32] '>Expire Date: <span className='font-medium text-base text-[#005a32] '>{food.expire_date}</span></h3>
                {/* view details */}
                 <button className='mt-4 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-6 w-full cursor-pointer 
                        rounded-sm font-semibold text-sm sm:text-base bg-[#238b45] hover:bg-transparent
                        border-[#238b45] hover:border-[#005a32] border-2 hover:scale-110
                        text-white hover:text-[#005a32] 
                        '>View Details</button>  
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