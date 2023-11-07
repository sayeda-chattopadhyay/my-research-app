import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Team from "../../components/Team";
import BreadcrumbExample from "../../components/BreadCrumb";

function About() {
  return (
    <div className="container mt-5 pt-5">
      <BreadcrumbExample />
      <Container className="border mt-5">
        <Row className="px-4 my-5">
          <Col sm={7}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col sm={5}>
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fluid
              rounded
              className=""
            />
          </Col>
        </Row>
      </Container>
      <Team />
    </div>
  );
}

export default About;
