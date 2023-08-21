/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { Contador } from './src/screens/Contador';
// import { BoxObjetctModelScreen } from './src/screens/BoxObjetctModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';


export const App = () => {

  return (

    <SafeAreaView style={{ flex:1 }}>
      {/* <BoxObjetctModelScreen/> */}
      <DimensionesScreen/>

    </SafeAreaView>
    // <HolaMundoScreen/>
    // <Contador/>

    

  )
  
}

export default App;
