import React from "react";

function Cards(props) {
  return (
    <div className="book-card">
      <h3 className="h3">{props.name}</h3>
      <p className="pOne">Av Sir Arthur Conan Doyle</p>
      <p className="pTwo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis
        ullam! Inventore deserunt, quis architecto mollitia delectus odio animi
        quos voluptas necessitatibus obcaecati doloribus atque eveniet assumenda
        veritatis.
      </p>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default Cards;
