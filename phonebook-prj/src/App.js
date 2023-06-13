import Form from "./components/Form";
import Lists from "./components/Lists";

import "./App.css";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([
    { id: "1", name: "이미란", tel: "010-1234-5678" },
  ]);

  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} />
      <Lists info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
