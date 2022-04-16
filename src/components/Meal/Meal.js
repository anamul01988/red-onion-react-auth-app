import React, { useEffect, useState } from "react";
import MealDetails from "../MealDetails/MealDetails";
import "./Meal.css";
const Meal = () => {
    const [meal, setMeal] = useState([]);
    useEffect(()=> {
        fetch('meal.json')
        .then(res => res.json())
        .then(data => setMeal(data))
    },[])
  return (
    <div className="container mt-5">
       <div className="nav d-flex justify-content-center">
           <h3 className="ms-5 fs-6 ">Breakfast</h3>
           <h3 className="ms-5 fs-6">Lunch</h3>
           <h3 className="ms-5 fs-6">Dinner</h3>
       </div>
       {/* <h3>{meal.length}</h3> */}
      <div className="row">
      {
           meal.map(meal => <MealDetails key={meal.id} meal={meal}/>)
       }
      </div>
    </div>
  );
};

export default Meal;
