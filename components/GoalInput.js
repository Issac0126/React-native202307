import React, { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState("");

    //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }


  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/duck.jpeg')} />
            <TextInput
              style={styles.textInput}
              placeholder="할 일을 입력하세요."
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="취소" onPress={props.onCancel} color={'#6A8534'} />
                </View>
                <View style={styles.button}>
                    <Button title="할 일 추가" onPress={addGoalHandler} color={'#DCAA00'}/>
                </View>
            </View>
          </View>
    </Modal>
  )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9bbf5f",
      },
      image: {
        width : '70%',
        // height: '30%',
        marginBottom: 40,
      },
      textInput: {
        backgroundColor: "#F9F4D3",
        // borderWidth: 1,
        borderColor: "green",
        width: "88%",
        padding: 12,
        paddingLeft: 18,
        borderRadius: 10,
      },
      buttonContainer: {
        flexDirection: "row",
        marginTop: 16
      },
      button: {
        width: 110,
        marginHorizontal: 8,
        color: '#626262',
        fontSize: '1.2em',
      }
})


