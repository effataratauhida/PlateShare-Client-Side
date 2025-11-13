import React, { useContext, useEffect, useState } from 'react';
import bannerI from '../../assets/a.png'
import { AuthContext } from './../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ManageMyFoods = () => {

    const { user } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);

     useEffect(() => {
    if (user?.email) {
      fetch(`https://plate-share-server-delta.vercel.app/myFoods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyFoods(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to undo this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`https://plate-share-server-delta.vercel.app/foodData/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            setMyFoods(myFoods.filter(f => f._id !== id));
            Swal.fire(
              'Deleted!',
              'The food item has been deleted.',
              'success'
            );
          }
        })
        .catch(err => console.error(err));
    }
  });
};



    return (

        <div>
          <title> Manage My Foods </title>
            <div className=" relative mb-14">
                                    <img src={bannerI} alt="" className='h-[300px] w-full ' />
                                 <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
                                    <h1 className=' text-[#edf8e9] text-3xl md:text-4xl font-bold mt-0'>Manage My Foods</h1>
                                    <p className=' text-[#edf8e9] mt-5 md:text-lg text-base font-medium'>
                                        Manage My Food allows you to view, update, or remove the food items you’ve added. Keep track of your contributions, update details, and ensure your donations reach those in need efficiently.</p>
                                    
                                    
                             </div>
                    </div>


                  <div className='max-w-11/12 mx-auto flex justify-center pb-20 '>
                
                  {
                    myFoods.length === 0 ? (
                     <p className="text-center text-2xl text-green-900 font-bold mt-10">
                         No food items found.
                         </p>
                     ) : (
                      <div className="max-w-full mx-auto overflow-x-auto md:overflow-x-visible">
                    <table className="max-w-full border-collapse rounded-sm">
                        <thead >
                            <tr className="border-b border-gray-400 bg-[#edf8e9] shadow-lg text-center">
                                
                                <td className='px-6 py-4 font-bold text-[#005a32] text-sm sm:text-base'>Name</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-sm sm:text-base'>Quantity</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-sm sm:text-base'>Pickup Location</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-sm sm:text-base'>Expire Date</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-sm sm:text-base'>Actions</td>

                            </tr>
                        </thead>
                        <tbody>
                          {myFoods.map(food => (
                            <tr key={food._id} className="border-b border-gray-400 bg-[#edf8e9] shadow-lg">
                                <td className="px-6 py-4 font-semibold text-[#005a32] text-sm sm:text-xl whitespace-nowrap">
                                    <img src={food.food_image}  alt='' className="w-12 h-12 rounded-full object-cover inline-block mr-3 shadow-sm" />
                                    {food.food_name}
                                </td>

                                <td className="px-6 py-4 text-center font-semibold text-[#005a32] text-sm sm:text-xl">
                                    {food.food_qty}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-[#005a32] text-sm sm:text-xl">
                                    {food.pickup_location} 
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-[#005a32] text-sm sm:text-xl">
                                    {food.expire_date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end items-center space-x-2">
                                    <button 
                                        className="py-2 sm:px-4 px-3 rounded-lg font-semibold bg-[#238b45] text-white hover:bg-transparent hover:border-2 hover:border-[#238b45] hover:text-[#238b45]">
                                            <Link to={`/updateFood/${food._id}`}>Update</Link>                      
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(food._id)}
                                        className="py-2 sm:px-4 px-3 rounded-lg font-semibold bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600 text-white">Delete
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>        
                    </table>
                    </div>
                 )}         
            
        </div> 

 </div>
        
    );
};

export default ManageMyFoods;