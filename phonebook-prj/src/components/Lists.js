import React from "react";
import List from "./List";

const Lists = ({ info, setInfo }) => {
  return (
    <div>
      <ul>
        {info.map((data, index) => (
          <List key={index} info={info} setInfo={setInfo} data={data}></List>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
