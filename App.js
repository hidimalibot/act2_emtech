import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import ClearButton from './components/ClearButton';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function clearGoals() {
    setCourseGoals([]);
  }

  return (
    <ImageBackground
    source= {require('./components/download.jpg')}
    style={styles.backgroundImage}>
    <View style={styles.appContainer}>
      <Text style={styles.apphead}>🙋Jak💔Roberto🙋</Text>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
      <Text style={styles.listhead}>📘List of Goals📘</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />

        <ClearButton onPress={clearGoals} />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  apphead: {
    textAlign: 'center',
    color: '#FFEAB8',
    fontSize: 30,
    fontWeight: 'bold',
  },
  listhead: {
    textAlign: 'center',
    color: '#FFEAB8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  goalListContainer: {
    flex: 10, 
    maxHeight: 400,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});