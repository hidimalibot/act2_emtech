import {useState} from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';
export default GoalInput;
function GoalInput(props) {
    const [enteredGoalText, setEnteredText] = useState('');

    function goalInputContainer(enteredText) {
        setEnteredText(enteredText);
    }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredText('');
    };

    return(
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder="Your Course Goal" 
          onChangeText={goalInputContainer} 
          value={enteredGoalText}
          />
        <Button color="#58A5E1" title="Add Goal" onPress={addGoalHandler}/>
      </View>   
    );
}


const styles = StyleSheet.create({

    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 24,
    },
    textInput: {
      color: 'white',
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 10,
      padding: 5,
      width: '80%',
    },
  });
