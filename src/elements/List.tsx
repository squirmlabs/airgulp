import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// TODO: use BaseList
const mock_Items = ['Palm Springs', 'COU', 'Venice'];
export function List() {
  return (
    <ListGroup variant="flush">
      {mock_Items.map(item => (
        <ListGroup.Item key={item}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
