import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function BreadcrumbExample() {
  return (
    <div className="d-flex mt-4 me-2">
      <Link to={"/"}>Home</Link>
      <div className="mx-2">
        <AiOutlineArrowRight />
      </div>
      <Link to={"/research"} className="fw-bold">
        Reseach
      </Link>
    </div>
  );
}

export default BreadcrumbExample;
