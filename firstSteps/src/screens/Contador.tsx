import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CustomFAB} from '../components/CustomFAB';

export const Contador = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador : {contador}</Text>

      <CustomFAB 
      title="-1"
      position='bl'
      onPress= {()=> setContador(contador-1)}
      />

      <CustomFAB 
      title="+1"
      position='br'
      onPress= {()=> setContador(contador+1)}
      />
      {/* <TouchableOpacity
      style={ styles.fabLocationBL } 
      onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
});
