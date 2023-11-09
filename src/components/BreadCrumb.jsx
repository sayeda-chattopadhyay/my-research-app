import { Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";

const Breadcrumb = ({ paths }) => (
  <div className="d-flex mt-4 me-2">
    <div>
      <div>
        {Array.isArray(paths) &&
          paths.map((path, index) => (
            <div key={index}>
              {index < paths.length - 1 ? (
                <>
                  <Link to={path.path}>{path.name}</Link>
                  <BsSlashLg className="mx-2" />
                </>
              ) : (
                <span className="fw-bold">{path.name}</span>
              )}
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Breadcrumb;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineArrowRight } from "react-icons/ai";

// const breadcrumbs = [
//   { name: "Home", url: "/" },
//   { name: "Research", url: "/research" },
//   // Add more breadcrumb items as needed
// ];

// function BreadcrumbExample() {
//   return (
//     <div className="d-flex mt-4 me-2">
//       {breadcrumbs.map((breadcrumb, index) => (
//         <React.Fragment key={breadcrumb.url}>
//           <NavLink
//             to={breadcrumb.url}
//             className={index === breadcrumbs.length - 1 ? "fw-bold" : ""}
//           >
//             {breadcrumb.name}
//           </NavLink>
//           {index < breadcrumbs.length - 1 && (
//             <AiOutlineArrowRight className="mx-2" />
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default BreadcrumbExample;

// function BreadcrumbExample() {
//   return (
//     <div className="d-flex mt-4 me-2">
//       <NavLink to={"/"}>Home</NavLink>
//       <div className="mx-2">
//         <AiOutlineArrowRight />
//       </div>
//       <NavLink to={"/research"} className="fw-bold">
//         Reseach
//       </NavLink>
//     </div>
//   );
// }

// export default BreadcrumbExample;
