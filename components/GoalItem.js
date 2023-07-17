import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    //react-native는 스타일 상속의 개념이 없다.
    //bind()는 표준 자바스크립트 함수로 나중에 실행할 함수를 미리 조정할 수 있게 한다.
    //bind에 제공되는 첫번째 인수는 곧 실행할 함수의 this 키워드로 설정된다.
    //두 번째 인수는 지정한 함수의 전달할 값을 세팅하면 된다. 
      <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={ (pressData) => pressData.pressed && styles.pressedItem} 
          //함수선언 : 터치가 진행될 때마다 style이 동작함. pressData가 true=클릭됐다면 스타일 작동.
        >
          <Text style={styles.goalText}> {props.text} </Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
