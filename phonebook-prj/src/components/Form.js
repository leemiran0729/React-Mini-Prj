import React, { useState } from "react";

const Form = ({ info, setInfo }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newInfo = {
      id: new Date(),
      name: name,
      tel: tel,
    };

    setInfo([...info, newInfo]);
    setName("");
    setTel("");
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleChangeTel = (e) => {
    e.preventDefault();
    setTel(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="이름" value={name} onChange={handleChangeName} />
      <input placeholder="전화번호" value={tel} onChange={handleChangeTel} />
      <button type="submit" onSubmit={handleSubmit}>
        등록
      </button>
    </form>
  );
};

export default Form;
