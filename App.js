import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.appContainer}>
        <TextInput placeholder="할 일을 입력하세요." />
        <Button title="할 일 추가하기" />
      </View>
      <View>
        <Text>할 일 목록들</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
