import React from 'react';
import bannerI from '../../src/assets/a.png'
import collectFood from '../../src/assets/collectFood.png'
import findFood from '../assets/findFood.png'
import postFood from '../assets/postFood.png'

const Banner = () => {
    return (
         <div >
            {/* hero section */}
            <div className=" relative mb-10">
                <img src={bannerI} alt="" className='h-[300px] w-full ' />
             <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
                <h1 className=' text-[#edf8e9] text-4xl font-bold mt-0'>PlateShare – Donate. Connect. Care.</h1>
                <p className=' text-[#edf8e9] mt-7 text-lg font-medium'>Turn your leftovers into hope. PlateShare makes it easy to share food and make a difference in your community.</p>
                <button className='mt-4 py-3 px-8 
                cursor-pointer rounded-sm font-semibold text-lg
                text-[#005a32] bg-[#edf8e9] hover:bg-[#238b45] hover:text-[#edf8e9]
                hover:scale-110  
                '>
                    View All Foods
                </button>
         </div>
            </div>
            {/* Dynamic Section (Featured Foods) */}
            <div className='max-w-11/12 mx-auto text-center pb-10'>
                <h1 className=' text-[#005a32] text-4xl font-bold mt-14'>
                    Most Available Meals</h1>
                <p className='text-[#005a32] mt-5 text-lg font-medium'>
                    Here are the food items with the largest servings. Pick your favorite and help reduce food waste together.</p>

                    {/* card layout */}
                <div>
                    <div class="card w-[190px] bg-green-300 p-4 rounded-sm">
                        <img src='' class="card-image w-full h-[130px] rounded-sm bg-green-800 "></img>
                        <div class="category"> name: Illustration </div>
                        <p>Food Qty</p>
                        <p>description</p>
                        <button>View Details</button>
                    </div>
               </div>    
            </div>

            {/* how it works */}
            <div className='max-w-11/12 mx-auto pb-10'>
                  
                <h1 className=' text-[#005a32] text-4xl font-bold mt-14 text-center'>
                    How It Works</h1>
                <p className='text-[#005a32] mt-5 text-lg font-medium text-center'>
                    PlateShare makes it easy to donate or find meals in three simple steps.</p>

           {/* steps */}
            <div className=' grid grid-cols-3 gap-4 mt-10'>

                <div className='bg-[#edf8e9] p-4  rounded-sm shadow-sm'>
                <img src={postFood} alt="" className=' w-full max-h-[250px] rounded-sm'/>
                <h3  className='mt-4 font-bold text-3xl text-[#005a32] text-center'>Step-1 </h3>
                <h3 className=' font-bold text-xl text-[#005a32] mt-2' >Post Food</h3>
                <p className=' text-[#005a32] text-base mt-2 font-medium'>
                    Donate your extra meals or food items by posting them with a few simple details.</p>
              </div>

              <div className='bg-[#edf8e9] p-4  rounded-sm shadow-sm'>
                <img src={findFood} alt="" className=' w-full max-h-[250px] rounded-sm'/>
                <h3  className='mt-4 font-bold text-3xl text-[#005a32] text-center'>Step-2 </h3>
                <h3 className=' font-bold text-xl text-[#005a32] mt-2' >Find Food</h3>
                <p className=' text-[#005a32] text-base mt-2 font-medium'>
                    Browse available meals posted by generous contributors near you.</p>
              </div>
              
              <div className='bg-[#edf8e9] p-4  rounded-sm shadow-sm'>
                <img src={collectFood} alt="" className=' w-full max-h-[250px] rounded-sm'/>
                <h3  className='mt-4 font-bold text-3xl text-[#005a32] text-center'>Step-3 </h3>
                <h3 className=' font-bold text-xl text-[#005a32] mt-2' >Collect Food</h3>
                <p className=' text-[#005a32] text-base mt-2 font-medium'>
                    Request an item and collect it safely to reduce food waste and help someone in need</p>
              </div>
            
            
            
            </div>
            
            </div>
         </div>
    
    );
};

export default Banner;