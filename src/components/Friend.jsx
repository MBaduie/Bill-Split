import React from "react";

const Friend = ({ image, name, balance }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
      </div>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}

      {balance > 0 && (
        <p className="green">
          {name} owe you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
