import { StyleSheet, View, Text} from "react-native";
function GoalItem(props) {
    return(
        <View style={styles.goalItems}>
            <Text style={styles.goalItems}>{props.text}</Text>
        </View>
      )
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#020E54',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#EDF0F2',
      backgroundColor: '#EDF0F2',
      marginTop: 5,
    },
  });
