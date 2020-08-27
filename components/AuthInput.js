import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";
import { onChange, onEndEditing } from "react-native";

const Container = styled.View`
  margin-bottom: 220px;
`;

const TextInput = styled.TextInput`
  width:${constants.width / 2}
  padding: 10px;
  background-color: ${(props) => props.theme.lightGreyColor};
  border: 1px solid ${(props) => props.theme.lightGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onChange,
  onEndEditing = () => null,
  autoCorrect = true,
}) => (
  <Container>
    <TextInput
      onChangeText={onChange}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      onEndEditing={onEndEditing}
      value={value}
      autoCorrect={autoCorrect}
    />
  </Container>
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf(["default", "number-pad", "email-address"]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "char"]),
  onChange: PropTypes.func.isRequired,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
};

export default AuthInput;
