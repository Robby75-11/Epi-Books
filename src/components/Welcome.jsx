import React from "react";
import { Container, Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Container className="mt-3">
      <Alert variant="info">
        <h1>Welcome to BookShop</h1>
        <p>Your one-stop destination for amazing books!</p>
      </Alert>
    </Container>
  );
}

export default Welcome;
