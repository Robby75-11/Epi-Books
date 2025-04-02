import { Container, Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Container className="mt-0 w-100 ">
      <Alert variant="warning text-center text-primary">
        <h1>Welcome to BookShop</h1>
        <p>Your one-stop destination for amazing books!</p>
      </Alert>
    </Container>
  );
}

export default Welcome;
