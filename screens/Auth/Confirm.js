import React, { useState } from "react";
import styled from "styled-components";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useLogIn } from "../../AuthContext";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CONFIRM_SECRET } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const confirmInput = useInput("");
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);
  const [confrimSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: confirmInput.value,
      email: navigation.getParam("email"),
    },
  });
  const handleConfirm = async () => {
    const { value } = confirmInput;
    if (value === "" || !value.includes(" ")) {
      return Alert.alert("존재하지 않는 Secret입니다");
    }
    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confrimSecretMutation();
      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("잘못된 Secret입니다.");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Secret을 확인할 수 없습니다");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder="Secret"
          returnKeyType="send"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton
          loading={loading}
          onPress={handleConfirm}
          text={"확인"}
          margin={(0, 0, 0, 0)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
