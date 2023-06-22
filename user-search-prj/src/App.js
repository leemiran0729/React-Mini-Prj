import "./App.css";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://koreanjson.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <Search users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
