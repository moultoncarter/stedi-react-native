import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Login = () => {
  const [phoneNumber, setPhonenumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhonenumber}
        value={phoneNumber}
        placeholder="111-2222-3333"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oenTimePassword}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;