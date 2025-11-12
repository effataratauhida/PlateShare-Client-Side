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
      fetch(`http://localhost:3000/myFoods?email=${user.email}`)
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
      
      fetch(`http://localhost:3000/foodData/${id}`, {
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


//   const handleDelete = (id) => {
//   const confirm =  Swal.fire({
//           text: "Are you sure want to delete?",
          
//           confirmButtonText: "OK",
//         });;
//   if (confirm) {
//     fetch(`http://localhost:3000/foodData/${id}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.deletedCount) {
//           setMyFoods(myFoods.filter(f => f._id !== id));
//           toast.success("The food is deleted successfully!");
//         }
//       })
//       .catch(err => console.error(err));
//   }
// }

    return (

        <div>
            <div className=" relative mb-14">
                                    <img src={bannerI} alt="" className='h-[300px] w-full ' />
                                 <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
                                    <h1 className=' text-[#edf8e9] text-4xl font-bold mt-0'>Manage My Foods</h1>
                                    <p className=' text-[#edf8e9] mt-5 text-lg font-medium'>
                                        Manage My Food allows you to view, update, or remove the food items you’ve added. Keep track of your contributions, update details, and ensure your donations reach those in need efficiently.</p>
                                    
                                    {/* all the cards */}
                             </div>
                    </div>


                  <div className='max-w-7/12 mx-auto  pb-20 '>
                

                    <table >
                        <thead >
                            <tr className="border-b border-gray-400 bg-[#edf8e9] shadow-lg text-center">
                                
                                <td className='px-6 py-4 font-bold text-[#005a32] text-base'>Name</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-base'>Quantity</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-base'>Pickup Location</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-base'>Expire Date</td>
                                <td className='px-6 py-4 font-bold text-[#005a32] text-base'>Actions</td>

                            </tr>
                        </thead>
                        <tbody>
                          {myFoods.map(food => (
                            <tr key={food._id} className="border-b border-gray-400 bg-[#edf8e9] shadow-lg">
                                <td className="px-6 py-4 font-semibold text-[#005a32] text-xl whitespace-nowrap">
                                    <img src={food.food_image}  alt='' className="w-12 h-12 rounded-full object-cover inline-block mr-3 shadow-sm" />
                                    {food.food_name}
                                </td>

                                <td className="px-6 py-4 text-center font-semibold text-[#005a32] text-xl">
                                    {food.food_qty}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-[#005a32] text-xl">
                                    {food.pickup_location} 
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-[#005a32] text-xl">
                                    {food.expire_date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end items-center space-x-2">
                                    <button 
                                        className="py-2 px-4 rounded-lg font-semibold bg-[#238b45] text-white hover:bg-transparent hover:border-2 hover:border-[#238b45] hover:text-[#238b45]">
                                            <Link to={`/updateFood/${food._id}`}>Update</Link>                      
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(food._id)}
                                        className="py-2 px-4 rounded-lg font-semibold bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600 text-white">Delete
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>        
                    </table>
                
            
        </div> 



                {/* <div className='max-w-11/12 mx-auto  pb-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {myFoods.map(food => (
          <div key={food._id} className='bg-[#edf8e9] p-4 rounded shadow'>
            <img src={food.food_image} alt={food.food_name} className='w-full max-h-48 rounded'/>
            <h2 className='mt-2 font-bold text-lg'>{food.food_name}</h2>
            <p>Quantity: {food.food_qty}</p>
            <p>Pickup: {food.pickup_location}</p>
            <p>Status: {food.food_status}</p>

            <div className='flex gap-3 mt-3'>
              <button 
                className='bg-blue-500 text-white px-3 py-1 rounded'
                onClick={() => handleUpdate(food._id)}>Update</button>
              <button 
                className='bg-red-500 text-white px-3 py-1 rounded'
                onClick={() => handleDelete(food._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
                </div> */}


           </div>
        
    );
};

export default ManageMyFoods;