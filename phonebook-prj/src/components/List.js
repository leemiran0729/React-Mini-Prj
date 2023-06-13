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
      <li>
        <form onSubmit={() => handleEdit(data.id)}>
          <input
            placeholder={data.name}
            value={editedName}
            onChange={handleChangeName}
          />
          <input
            placeholder={data.tel}
            value={editedTel}
            onChange={handleChangeTel}
          />
          <button type="submit" onSubmit={() => handleEdit(data.id)}>
            적용
          </button>
        </form>
      </li>
    );
  } else {
    return (
      <li>
        이름: {data.name}, 전화번호: {data.tel}
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={() => handleRemove(data.id)}>삭제</button>
      </li>
    );
  }
};

export default List;
