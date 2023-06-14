import React from "react";
import List from "./List";

const Lists = ({ info, setInfo }) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow rounded p-10">
      <ul>
        {info.map((data, index) => (
          <List key={index} info={info} setInfo={setInfo} data={data}></List>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
