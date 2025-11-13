import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import bannerI from '../../assets/a.png'

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://plate-share-server-delta.vercel.app/myFoodRequests?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRequests(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <><title>My Food Requests</title>
    
    <div className=" relative mb-14">
        <img src={bannerI} alt="" className='h-[300px] w-full ' />
        <div className='max-w-11/12 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center'>
            <h1 className=' text-[#edf8e9] text-3xl md:text-4xl font-bold mt-0'>My Food Requests</h1>
            
                <p className="md:text-lg text-base font-medium text-[#edf8e9] max-w-3xl mx-auto leading-relaxed mt-5">
               Here you can view all the food requests you’ve submitted.  
                 Track the status of each request — whether it’s <span className="text-yellow-400 font-semibold">pending</span> ,  
                <span className="text-green-400 font-semibold"> accepted</span> , or  
                       <span className="text-red-400 font-semibold"> rejected</span>.  
    
                   </p>
                                        
        </div>
        </div>

    <div className="max-w-11/12 mx-auto flex justify-center my-10 bg-[#edf8e9] p-6 rounded-lg shadow">
      

      {requests.length === 0 ? (
        <p className="text-center text-lg text-[#005a32]">
          You haven’t made any requests yet 
        </p>
      ) : (
        <div className="max-w-full mx-auto overflow-x-auto md:overflow-x-visible">
        <table className="w-full border border-[#005a32] rounded-lg overflow-hidden shadow-lg">
      <thead>
    <tr className="border-b border-gray-400 bg-[#edf8e9] shadow-lg text-center">
      <td className="px-6 py-4 font-bold text-[#005a32] text-base">Food Name</td>
      <td className="px-6 py-4 font-bold text-[#005a32] text-base">Location</td>
      <td className="px-6 py-4 font-bold text-[#005a32] text-base">Reason</td>
      <td className="px-6 py-4 font-bold text-[#005a32] text-base">Contact</td>
      <td className="px-6 py-4 font-bold text-[#005a32] text-base">Status</td>
    </tr>
    </thead>
     <tbody>
    {requests.map((req) => (
      <tr key={req._id} className="border-b border-gray-400 bg-[#edf8e9] shadow-sm hover:bg-[#e5f5e0] text-center">
        <td className="px-6 py-4 font-semibold text-[#005a32] text-lg whitespace-nowrap">
          {req.foodName}
        </td>
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

export default MyFoodRequests;
