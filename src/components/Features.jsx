import {StyledSection} from "./styles/Section.styled";

const Features = () => {
  return (
    <StyledSection>
    <div className="container px-4 py-5 my-5 border border-success" id="featured-3">
      <h2 className="pb-2 border-bottom">Featured section</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
      </div>
    </div>
  </StyledSection>
  );
};

export default Features;
