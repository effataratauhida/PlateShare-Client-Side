import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState(null);
  const [foodQty, setFoodQty] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodImage) return toast.error("Please select an image!");
    setLoading(true);

   // Prepare food data
    const foodData = {
      food_name: foodName,
      food_image: foodImage,
      food_qty: foodQty,
      pickup_location: pickupLocation,
      expire_date: expireDate,
      description: description,
      donator_name: user?.displayName,
      donator_email: user?.email,
      donator_image: user?.photoURL,
      food_status: "Available"
    };

    // Send to server
    fetch('http://localhost:3000/foodData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(foodData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Food added successfully!');
         navigate('/')
          setFoodName('');
          setFoodImage(null);
          setFoodQty('');
          setPickupLocation('');
          setExpireDate('');
          setDescription('');
        }
      })
      .catch(() => toast.error('Failed to add food.'))
      .finally(() => setLoading(false));
  };

  return (
    <><title>Add Food</title>
    <div className='max-w-11/12 mx-auto flex justify-center mt-10 pb-20'>
      <div className="card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-[#edf8e9]">

        <h2 className='font-bold text-2xl text-center text-[#005a32]'>Add Food</h2>

        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">

            {/* Food Fields */}
            <input type="text"
              placeholder="Food Name" value={foodName}
              onChange={e => setFoodName(e.target.value)}
              required className="input" />

            {/* <input type="text"
              accept="image/*" onChange={e => setFoodImage(e.target.files[0])}
              required className="input mt-3" /> */}

               <input type="text" 
               placeholder="Image URL" value={foodImage} onChange={e=>setFoodImage(e.target.value)} 
               required className="input"/>

            <input type="text" placeholder="Food Quantity (e.g., Serves 2 people)"
              value={foodQty} onChange={e => setFoodQty(e.target.value)}
              required className="input mt-3" />

            <input type="text" placeholder="Pickup Location"
              value={pickupLocation} onChange={e => setPickupLocation(e.target.value)}
              required className="input mt-3" />

            <input type="date" value={expireDate}
              onChange={e => setExpireDate(e.target.value)}
              required className="input mt-3" />

            <textarea placeholder="Additional Notes"
              value={description} onChange={e => setDescription(e.target.value)}
              className="input mt-3" />

            {/* Auto-filled Donator Info */}
            <div className="mt-4 border-t pt-3">
              <p className="text-[#005a32] font-semibold text-center mb-2">Donator Info (Auto-filled)</p>

              <input type="text" value={user?.displayName || ''} readOnly className="input bg-gray-100 mb-2" />
              <input type="email" value={user?.email || ''} readOnly className="input bg-gray-100 mb-2" />

              {user?.photoURL && (
                <div className="flex justify-center mb-2">
                  <img src={user.photoURL} alt="Donator" className="w-16 h-16 rounded-full border-2 border-[#238b45]" />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading}
              className="btn bg-[#238b45] hover:bg-transparent border-[#238b45] text-white 
              hover:text-[#005a32] border-2 py-2 mt-3">
              {loading ? 'Adding...' : 'Add Food'}
            </button>

          </fieldset>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddFood;

