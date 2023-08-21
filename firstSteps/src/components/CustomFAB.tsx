import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

interface fabProps {
  title: string;
  position?: 'br' | 'bl';

  onPress: () => void;
}

export const CustomFAB = ({title, onPress, position = 'br'}: fabProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
