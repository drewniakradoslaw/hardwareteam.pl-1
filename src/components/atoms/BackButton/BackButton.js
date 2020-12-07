import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import { useFontSize } from "@hooks/styled-components";

const StyledLink = styled(Link)`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 8px;
  transform: rotate(-90deg) !important;
`;

const BackButton = ({ to, children, onClick, ...props }) => (
  <StyledLink to={to} onClick={onClick} {...props}>
    <StyledIcon icon={arrowIcon} />
    {children}
  </StyledLink>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

BackButton.defaultProps = {
  onClick: undefined,
};

export default BackButton;
