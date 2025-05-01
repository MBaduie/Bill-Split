import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";

const App = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [addFriend, setAddFriend] = useState(false);

  const handleAddFriendForm = () => {
    setAddFriend((add) => !add);
  };
  function handleAddFriend(friend) {
    setFriendsList((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendsList={friendsList} />
        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onAddFriend={handleAddFriendForm}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
