import React from "react";
import { Link } from "react-router-dom";

const ResearchSection = () => {
  return (
    <div className="container px-4 py-5 my-5 border border-success">
      <h2 className="pb-2 border-bottom">Our research</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Left-aligned title explaining these awesome features
          </h2>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <Link to={"/research"} className="btn btn-primary btn-lg">
            View our research
          </Link>
        </div>
        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em"></svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Featured title
              </h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em"></svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Featured title
              </h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em"></svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Featured title
              </h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em"></svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Featured title
              </h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
