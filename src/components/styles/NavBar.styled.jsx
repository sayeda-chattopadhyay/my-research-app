import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  padding: 0 10px;
  color: white;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
    background-color: transparent !important;
    color: white !important;
  }

  &.active {
    font-weight: bold;
    font-size: 1.2rem;
    background-color: transparent !important;
    color: white !important;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 24px;
  }
`;
