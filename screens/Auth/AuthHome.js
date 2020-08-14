import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2.2};
`;

const Touchable = styled.TouchableOpacity``;
const SignUpBtn = styled.View`
  background-color: ${(props) => props.theme.greenColor};
  padding: 10px;
  margin: -200px 50px;
  border-radius: 4px;
  width: ${constants.width / 2};
  margin-bottom: 200px;
`;
const SignUpBtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const LoginLink = styled.View`
  padding: 10px;
  margin: -200px 50px;
  margin-bottom: 200px;
`;
const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.greenColor};
  font-weight: 600;
`;

export default ({ navigation }) => (
  <View>
    <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <Touchable onPress={() => navigation.navigate("Signup")}>
      <SignUpBtn>
        <SignUpBtnText>Create New Account</SignUpBtnText>
      </SignUpBtn>
    </Touchable>
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);
