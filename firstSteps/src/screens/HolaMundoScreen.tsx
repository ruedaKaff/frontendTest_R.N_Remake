import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
          flex:1,
          backgroundColor: 'blue',
          justifyContent:'center',
        }}>
    
          <Text style={{
            fontSize: 45,
            textAlign: 'center'
          }}
          >
            Hola mundo Screen</Text>
        </View>
      )
}
