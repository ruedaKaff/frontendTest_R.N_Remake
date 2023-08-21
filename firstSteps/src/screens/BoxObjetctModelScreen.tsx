import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjetctModelScreen = () => {
  return (
    <View style={styles.container}>
    <Text
      style={styles.title}> Box object model</Text>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  }, 

  title: {
    padding: 50,
    fontSize:30,
    borderWidth: 10,
    // backgroundColor: 'red',
  }

});

