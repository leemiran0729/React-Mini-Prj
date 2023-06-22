import React from "react";
import styled from "styled-components";

const UserList = ({ users }) => {
  return (
    <ListContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>name</Th>
            <Th>username</Th>
            <Th>email</Th>
            <Th>website</Th>
            <Th>address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.website}</Td>
              <Td>
                {user.city +
                  " " +
                  user.district +
                  " " +
                  user.street +
                  "(" +
                  user.zipcode +
                  ")"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ListContainer>
  );
};

export default UserList;

const ListContainer = styled.div`
  text-align: center;
`;

const Table = styled.table`
  border: 1px solid #04b486;
  border-radius: 10px;
  margin: 0 auto;
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Th = styled.th`
  border: 1px solid #04b486;
  padding: 10px;
`;

const Tr = styled.tr``;

const Tbody = styled.tbody``;

const Td = styled.td`
  border: 1px solid #04b486;
  padding: 10px;
`;
