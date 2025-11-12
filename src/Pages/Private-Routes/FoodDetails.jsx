import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/foodData/${id}`)
      .then(res => res.json())
      .then(data => setFood(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!food) return <p>Loading...</p>;

  return (
    <div className="max-w-11/12 mx-auto my-10 p-4 bg-[#edf8e9] rounded-sm shadow-lg">

       {/* food details */}
        
            <div className='flex gap-5'>
                <img src={food.food_image} className='w-1/2 max-h-80 rounded-sm'></img>

                <div>
                    <h2 className=' font-bold text-2xl text-[#005a32]'>{food.food_name}</h2>
                <h3 className='mt-2 font-bold text-lg text-[#005a32] '>Quantity: <span className='font-medium text-lg text-[#005a32] '>{food.food_qty}</span></h3>
                <h3 className='mt-2 font-bold text-lg text-[#005a32] '>Pickup Location: <span className='font-medium text-lg text-[#005a32] '>{food.pickup_location}</span>
                  </h3>
                <h3 className='mt-2 font-bold text-lg text-[#005a32] '>Expire Date: <span className='font-medium text-lg text-[#005a32] '>{food.expire_date}</span></h3>
                          
                <p className='mt-2 font-bold text-lg text-[#005a32] '>Additional notes: <span className='font-medium text-lg text-[#005a32] '>{food.description}</span></p>

                <p className='border-2 border-[#005a32] px-4 py-1 mt-2 text-[#005a32] inline-block text-center rounded-3xl'>{food.food_status}</p>
                <br />

                <button className='mt-4 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-6 inline-block cursor-pointer 
                        rounded-sm font-semibold text-sm sm:text-base bg-[#238b45] hover:bg-transparent
                        border-[#238b45] hover:border-[#005a32] border-2 hover:scale-105
                        text-white hover:text-[#005a32]'>
                        Request Food</button>  
                </div>
                
            </div>
      
            {/* donators info */}

            <div className="mt-5 border-t pt-3 ">
                
                <h2 className=" font-bold text-2xl text-[#005a32]">Donator's Information:</h2>
                <div className='flex gap-5 mt-5 '>
                    <img src={food.donator_image} alt="" className='w-40 h-40 rounded-lg'/>

                    <div>
                        <p className='mt-3 font-bold text-lg text-[#005a32]'>Name: <span className='font-medium text-lg text-[#005a32] '>{food.donator_name}</span></p>
        
                        <p className='mt-3 font-bold text-lg text-[#005a32]'>Email: <span className='font-medium text-lg text-[#005a32] '>{food.donator_email}</span></p>
                    </div>
                </div>
        
            </div>
        </div>
    
  );
};

export default FoodDetails;
