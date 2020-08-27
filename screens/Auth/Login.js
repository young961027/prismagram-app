import React, { useState } from "react";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import LOG_IN from "../Auth/AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const emailInput = useInput("");
  const [loading, setLoading] = useState(false);
  const requestSecret = useMutation(LOG_IN, {
    variables: {
      $email: emailInput.value,
    },
  });
  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("이메일을 입력해주세요");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("정상적인 email형식이 아닙니다");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("유효하지 않은 email입니다.");
    }
    try {
      setLoading(true);
      await requestSecret();
      Alert.alert("Email을 확인하세요");
      navigation.navigate("Confirm");
    } catch (e) {
      Alert.alert("로그인 할 수 없습니다");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="send"
          onEndEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton
          loading={loading}
          onPress={handleLogin}
          text={"로그인"}
          margin={(0, 0, 0, 0)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
