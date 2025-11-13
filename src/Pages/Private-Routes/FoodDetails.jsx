import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const FoodDetails = () => {

  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const isOwner = user?.email === food?.donator_email;
  const [requestData, setRequestData] = useState({
    location: '',
    reason: '',
    contactNo: ''
  });
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://plate-share-server-delta.vercel.app/foodData/${id}`)
      .then(res => res.json())
      .then(data => setFood(data))
      .catch(err => console.error(err));
  }, [id]);


useEffect(() => {
  if (isOwner) {
    fetch(`https://plate-share-server-delta.vercel.app/foodRequests?foodId=${food._id}`)
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(err => console.error(err));
  }
}, [food, isOwner]);

  if (!food) return <p>Loading...</p>;

  const handleRequestSubmit = (e) => {
  e.preventDefault();
  if (!user) {
    toast.error("You must be logged in to request food");
    return;
  }

  const newRequest = {
    foodId: food._id,
    foodName: food.food_name,
    requesterEmail: user.email,
    requesterName: user.displayName,
    requesterPhoto: user.photoURL,
    location: requestData.location,
    reason: requestData.reason,
    contactNo: requestData.contactNo,
    status: "pending"
  };

  fetch('https://plate-share-server-delta.vercel.app/foodRequests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRequest)
  })
    .then(res => res.json())
    .then(data => {
      toast.success("Request submitted successfully!");
      navigate('/')
      setShowModal(false);
      setRequestData({ location: '', reason: '', contactNo: '' });
    })
    .catch(err => console.error(err));
};



const handleRequestAction = (requestId, action) => {
  fetch(`https://plate-share-server-delta.vercel.app/foodRequests/${requestId}`, {
    method: 'PATCH', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: action })
  })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        setRequests(prev => prev.map(req => req._id === requestId ? {...req, status: action} : req));
        if (action === 'accepted') {
          // Food status update
          fetch(`https://plate-share-server-delta.vercel.app/foodData/${food._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ food_status: 'donated' })
          });
        }
      }
    })
    .catch(err => console.error(err));
};


  return (
    <> <title>Food Details</title>
    <div className="max-w-11/12 mx-auto my-10 p-4 bg-[#edf8e9] rounded-sm shadow-lg">

       {/* food details */}
        
            <div className='flex flex-col sm:flex-row gap-5'>
                <img src={food.food_image} className='sm:w-1/2 max-h-80 rounded-sm'></img>

                <div>
                    <h2 className=' font-bold text-2xl text-[#005a32]'>{food.food_name}</h2>
                <h3 className='mt-2 font-bold text-base md:text-lg text-[#005a32] '>Quantity: <span className='font-medium text-base md:text-lg text-[#005a32] '>{food.food_qty}</span></h3>
                <h3 className='mt-2 font-bold text-base md:text-lg text-[#005a32] '>Pickup Location: <span className='font-medium text-base md:text-lg text-[#005a32] '>{food.pickup_location}</span>
                  </h3>
                <h3 className='mt-2 font-bold text-base md:text-lg text-[#005a32] '>Expire Date: <span className='font-medium text-base md:text-lg text-[#005a32] '>{food.expire_date}</span></h3>
                          
                <p className='mt-2 font-bold text-base md:text-lg text-[#005a32] '>Additional notes: <span className='font-medium text-base md:text-lg text-[#005a32] '>{food.description}</span></p>

                <p className='border-2 border-[#005a32] px-3 md:px-4 py-1 mt-2 text-base text-[#005a32] inline-block font-medium 
                text-center rounded-3xl'>{food.food_status}</p>
                <br />

                <button   onClick={() => setShowModal(true)}
                 className='mt-4 py-2 px-6  md:py-2 md:px-6 inline-block cursor-pointer 
                  rounded-sm font-semibold text-base bg-[#238b45] hover:bg-transparent
                border-[#238b45] hover:border-[#005a32] border-2 hover:scale-105
                text-white hover:text-[#005a32]'>
                  Request Food</button>  
                </div>
                
            </div>
      
            {/* donators info */}

            <div className="mt-5 border-t pt-3  ">
                
                <h2 className=" font-bold text-2xl text-[#005a32]">Donator's Information:</h2>
                <div className='flex  gap-5 mt-5 '>
                    <img src={food.donator_image} alt="" className='w-40 h-40 rounded-lg'/>

                    <div>
                        <p className='mt-3 font-bold text-base sm:text-lg text-[#005a32]'>Name: <span className='font-medium text-base sm:text-lg text-[#005a32] '>{food.donator_name}</span></p>
        
                        <p className='mt-3 font-bold text-base sm:text-lg text-[#005a32]'>Email: <span className='font-medium text-base sm:text-lg text-[#005a32] '>{food.donator_email}</span></p>
                    </div>
                </div>
        
            </div>



          {showModal && (
            <div className="fixed inset-0 bg-[#edf8e9]  bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
                <h2 className="text-2xl font-bold text-[#005a32] mb-4">Request Food</h2>
           
            <form onSubmit={handleRequestSubmit} 
             className="space-y-4">

        <input
          type="text"
          placeholder="Your Location"
          value={requestData.location}
          onChange={e => setRequestData({...requestData, location: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Why do you need food?"
          value={requestData.reason}
          onChange={e => setRequestData({...requestData, reason: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Contact No"
          value={requestData.contactNo}
          onChange={e => setRequestData({...requestData, contactNo: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2  rounded 
           text-[#238b45] border-2 font-semibold">Cancel</button>

          <button type="submit" className="px-4 py-2 bg-[#238b45] text-white rounded
          hover:bg-transparent hover:text-[#238b45] hover:border-2 hover
          border-[#238b45] font-semibold">Submit Request</button>
        </div>
      </form>
    </div>
  </div>
          )}




        {isOwner && requests.length > 0 && (
          <div className="my-10">
           <h2 className="text-2xl font-bold text-[#005a32] mb-6 text-center">
             Food Requests
           </h2>

         <table className="w-full border border-[#005a32] rounded-lg overflow-hidden shadow-lg">
          <thead>
        <tr className="border-b border-gray-400 bg-[#def6d6] shadow-lg text-center">
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Requester</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Email</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Location</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Reason</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Contact</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Status</td>
          <td className="px-6 py-4 font-bold text-[#005a32] text-base">Actions</td>
        </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
           <tr key={req._id} className="border-b border-gray-400 bg-[#edf8e9] shadow-sm hover:bg-[#e5f5e0] text-center">
            <td className="px-6 py-4 font-semibold text-[#005a32] text-lg whitespace-nowrap">
              {req.requesterName}
            </td>
            <td className="px-6 py-4 font-semibold text-[#005a32] text-lg">{req.requesterEmail}</td>
            <td className="px-6 py-4 font-semibold text-[#005a32] text-lg">{req.location}</td>
            <td className="px-6 py-4 font-semibold text-[#005a32] text-lg">{req.reason}</td>
            <td className="px-6 py-4 font-semibold text-[#005a32] text-lg">{req.contactNo}</td>
            <td
              className={`px-6 py-4 font-semibold text-lg ${
                req.status === "pending"
                  ? "text-yellow-600"
                  : req.status === "accepted"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {req.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center space-x-2">
              <button
                onClick={() => handleRequestAction(req._id, "accepted")}
                className="py-2 px-4 rounded-lg font-semibold bg-[#238b45] text-white hover:bg-transparent hover:border-2 hover:border-[#238b45] hover:text-[#238b45]"
              >
                Accept
              </button>
              <button
                onClick={() => handleRequestAction(req._id, "rejected")}
                className="py-2 px-4 rounded-lg font-semibold bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600 text-white"
              >
                Reject
              </button>
            </td>
          </tr>
           ))}
        </tbody>
       </table>
        </div>
        )}


        </div>
        
    </>
  );
};

export default FoodDetails;
