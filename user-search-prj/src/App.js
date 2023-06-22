import "./App.css";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://koreanjson.com/users")
      .then((response) => {
        setUsers(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Search users={users} setSearchResults={setSearchResults} />
      <UserList searchResults={searchResults} />
    </div>
  );
}

export default App;
