import React from 'react';
import bannerI from '../../assets/a.png'
import { useLoaderData } from 'react-router';



const AvailableFoods = () => {

    const foods = useLoaderData();
    //console.log(data)



    return (
        // <div className='max-w-11/12 mx-auto py-20'>
        //     foods are aavail
        // </div>
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
        <div className='max-w-11/12 mx-auto grid grid-cols-3 gap-4 pb-20'>
            {foods.map((food) => (
                <div key={food._id} className='bg-green-500 p-4 min-h-[400px]'>
                    <img src={food.food_image} alt="" />
                </div>
            ))}
        </div>
        </div>
        
    );
};

export default AvailableFoods;