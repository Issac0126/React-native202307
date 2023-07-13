import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    //react-native는 스타일 상속의 개념이 없다.
    <View style={styles.goalItem}>
      <Text style={styles.goalText} id="goal-text">
        {props.text}
      </Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
