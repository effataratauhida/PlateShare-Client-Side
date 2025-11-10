import React from 'react';

const FoodDetails = () => {

    const food = foods.find( food => food._id === parseInt(id));
    return (
        <div>
            <img src={food.food_image } alt="" />
            <div className=''>
                <h2>{food.food_name}</h2>
            </div>
        </div>
    );
};

export default FoodDetails;