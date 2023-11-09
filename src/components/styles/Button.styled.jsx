import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledButton = styled(NavLink)`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  // text-transform: uppercase;
  padding: 10px 20px;
  text-decoration: none;
  background-color: ${({ bg }) => (bg ? bg : "blue")};
  color: ${({ color }) => (color ? color : "white")};

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;
