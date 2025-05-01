import { Children } from "react";

const Button = ({ children, onAddFriend }) => {
  return (
    <button className="button" onClick={onAddFriend}>
      {children}
    </button>
  );
};

export default Button;
