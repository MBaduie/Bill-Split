// import { initialFriends } from "../data";
import Friend from "./Friend";
const FriendsList = ({ friendsList }) => {
  if (friendsList.length === 0) {
    return <p>Let's add new friends to split bill with</p>;
  }
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
