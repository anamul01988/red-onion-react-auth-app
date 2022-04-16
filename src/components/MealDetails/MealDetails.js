import React from "react";

const MealDetails = ({ meal }) => {
  console.log(meal);
  const { id, name, description, img, price } = meal;
  console.log(img)
  return (
    <div className="col-md-4 my-4">
      <div class="card text-center">
        <div className="card-img d-flex justify-content-center align-item-center">
           <img className="" height={150} width={150} src={img}  alt="img" />
        </div>
        <div class="card-body text-center">
            <h4>{name}</h4>
            <h5>{price}</h5>
          <p class="card-text">
             {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
