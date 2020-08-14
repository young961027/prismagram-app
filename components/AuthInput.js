import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View``;

const TextInput = styled.TextInput``;

const AuthInput = ({ placeholder, value, keyboardType }) => (
  <Container>
    <TextInput
      placeholder={placeholder}
      value={value}
      keyboardType={"email-address"}
    />
  </Container>
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf(["default", "number-pad", "email-address"]),
};

export default AuthInput;
