import React, { useState } from "react";

const List = ({ info, setInfo, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, seteEditedName] = useState("");
  const [editedTel, setEditedTel] = useState("");

  const handleEdit = (id) => {
    let newInfo = info.map((item) => {
      if (item.id === id) {
        item.name = editedName;
        item.tel = editedTel;
      }
      return item;
    });
    setInfo(newInfo);
    setIsEditing(false);
  };

  const handleRemove = (id) => {
    let newInfo = info.filter((item) => item.id !== id);
    setInfo(newInfo);
  };

  const handleChangeName = (e) => {
    seteEditedName(e.target.value);
  };

  const handleChangeTel = (e) => {
    setEditedTel(e.target.value);
  };

  if (isEditing) {
    return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow rounded p-10">
        <li>
          <form onSubmit={() => handleEdit(data.id)}>
            <input
              className="lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              placeholder={data.name}
              value={editedName}
              onChange={handleChangeName}
            />
            <input
              className="lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              placeholder={data.tel}
              value={editedTel}
              onChange={handleChangeTel}
            />
            <button
              className="mt-2 rounded p-1 bg-indigo-400 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 mx-2 w-20"
              type="submit"
              onSubmit={() => handleEdit(data.id)}
            >
              적용
            </button>
          </form>
        </li>
      </div>
    );
  } else {
    return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow rounded p-10">
        <li>
          <p>이름: {data.name}</p> <p>전화번호: {data.tel}</p>
          <button
            className="rounded p-1 bg-indigo-400 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 mx-2 w-20 mt-2"
            onClick={() => setIsEditing(true)}
          >
            수정
          </button>
          <button
            className="rounded p-1 bg-indigo-400 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 mx-2 w-20 mt-2"
            onClick={() => handleRemove(data.id)}
          >
            삭제
          </button>
        </li>
      </div>
    );
  }
};

export default List;
