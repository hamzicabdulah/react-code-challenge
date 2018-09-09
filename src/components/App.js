import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './List';
import AddItem from './AddItem';

export function App() {
  return (
    <Container>
      <Row>
        <Col xs="12" lg="9"><AddItem /></Col>
        <Col xs="12" lg="9"><List /></Col>
      </Row>
    </Container>
  );
}