import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: #e74c3c;
    font-weight: 600;
`;

const NotFound = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

NotFound.prototype = {
  text: PropTypes.string.isRequired
};

export default NotFound;
