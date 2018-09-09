import React from 'react';
import { Container } from 'reactstrap';
import List from './List';
import AddItem from './AddItem';
import GrandTotal from './GrandTotal';

export function App() {
  return (
    <Container>
      <AddItem />
      <List />
      <GrandTotal />
    </Container>
  );
}