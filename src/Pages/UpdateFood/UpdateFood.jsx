import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";


const UpdateFood = () => {
  const food = useLoaderData();
  const navigate = useNavigate(); 
  //console.log(food)
  const [formData, setFormData] = useState(food);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Updating food with id:", food._id, formData);
    const { _id, ...foodDataWithoutId } = formData;

    fetch(`https://plate-share-server-delta.vercel.app/foodData/${food._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodDataWithoutId),
      
    })
    
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          toast.success("Food updated successfully!");
          navigate("/")
        }
      });
  };

  return (
    <><title>Update Food</title>

    <div className="max-w-xl mx-auto mt-10 mb-20 bg-[#edf8e9] p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-5 text-[#005a32]">Update Food</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="food_name"
          value={formData.food_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Food Name"
        />
        <input
          name="food_qty"
          value={formData.food_qty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Quantity"
        />
        <input
          name="pickup_location"
          value={formData.pickup_location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Pickup Location"
        />
        <input
          name="expire_date"
          value={formData.expire_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Expire Date"
        />

        <button
          type="submit"
          className="w-full py-2 bg-[#238b45] text-white rounded font-semibold hover:bg-[#005a32]"
        >
          Save Changes
        </button>
      </form>
    </div>
    </>
  );
};

export default UpdateFood;
