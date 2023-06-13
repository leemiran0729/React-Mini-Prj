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
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow rounded p-10">
      <img
        className="m-auto"
        src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/phone-volume-128.png"
        alt="phonebook"
      />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          placeholder="이름"
          value={name}
          onChange={handleChangeName}
        />
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          placeholder="전화번호"
          value={tel}
          onChange={handleChangeTel}
        />
        <button
          className="flex w-full justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
          onSubmit={handleSubmit}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default Form;
