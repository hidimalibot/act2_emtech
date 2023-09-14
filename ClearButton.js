import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ClearButton = ({ onPress }) => {
  return (
    <View style={styles.clearButtonContainer}>
      <Button color="#58A5E1" title="Clear Goals" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearButtonContainer: {
    height: 40,
    alignItems: 'center',
  },
});

export default ClearButton;