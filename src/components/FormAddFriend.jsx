import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [imgURL, setImgURL] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    if (friendName && imgURL) {
      return;
    }
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      img: `${imgURL}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setFriendName("");
    setImgURL("");
    // Reset the form fields after adding a friend
    // }
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label htmlFor="friendName">👯Friend name</label>
      <input
        type="text"
        name="friendName"
        id="friendName"
        placeholder="add your friend"
        value={friendName}
        onChange={(e) => setFriendName(String(e.target.value))}
      />
      <label htmlFor="img">📸Image URL</label>
      <input
        type="text"
        placeholder="add image link"
        value={imgURL}
        onChange={(e) => setImgURL(String(e.target.value))}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
