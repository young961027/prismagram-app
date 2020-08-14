import React from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => (
  <View>
    <AuthInput value="" placeholder="Email" />
    <AuthButton onPress={() => null} text={"Login"} margin={(0, 0, 0, 0)} />
  </View>
);
