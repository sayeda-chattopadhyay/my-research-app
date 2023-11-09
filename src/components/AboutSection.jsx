import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import {StyledSection} from "./styles/Section.styled";

function AboutSection() {
  return (
    <StyledSection>
    <Container className="border border-success mt-5 pt-5">
      <Row className="px-4 my-5">
        <Col sm={5}>
          <Image
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fluid
            rounded
            className=""
          />
        </Col>
        <Col sm={7}>
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link to={"/about"} className="btn btn-primary btn-lg">About Us</Link>
        </Col>
      </Row>
    </Container>
    </StyledSection>
  );
}

export default AboutSection;
