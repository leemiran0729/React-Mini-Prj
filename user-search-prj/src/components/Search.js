import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {};

  return (
    <SearchContainer>
      <Input type="text" value={name} onChange={handleChange} />
      <Button onClick={handleSearch}>검색</Button>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  margin: 10px;
`;

const Input = styled.input`
  border: 1px solid #04b486;
  border-radius: 5px;
  height: 40px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 70px;
  height: 44px;
  background-color: #04b486;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
