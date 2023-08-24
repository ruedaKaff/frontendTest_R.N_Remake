import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.cajaMorada} ></View>
        <View style={styles.cajaNaranja}></View>
        
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        // flex: 1,
        width:400,
        height: 800,
        backgroundColor:'#28C4D9',
        justifyContent:'center',
        alignItems: 'center'
    },
    cajaMorada: { 
        width: 100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth: 10,
        borderColor: 'white',

    },
    cajaNaranja: { 
        width: 100,
        height:100,
        backgroundColor:'#F0A23D',
        borderWidth: 10,
        borderColor: 'white',
        

    }



}) 
