import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import {StyledSection} from "./styles/Section.styled";

function Banner() {
  return (
    <StyledSection>
    <div className="container border mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-md-6 order-md-2 col-lg-5">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fluid
            rounded
            className="mb-4 mb-md-0"
          />
        </div>
        <div className="col-12 col-md-6 order-md-1 col-lg-7">
          <div className="text-center text-md-start">
            <h6>Welcome to my website</h6>
            <h1>Lorem Ipsum</h1>

            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <NavLink to={"/research"} className="btn">
              View our research
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </StyledSection>
  );
}

export default Banner;
