import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.cajaMorada} ></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaVerde}></View>
        
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        height:400,
        width:400,
        backgroundColor:'#28C4D9',
        // justifyContent:'center',
        // alignItems: 'center'
    },
cajaMorada: { 
        width: 100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        top: 0,

    },
    cajaNaranja: { 
        width: 100,
        height:100,
        backgroundColor:'#F9A23D',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: { 
        width: 100,
        height:100,
        backgroundColor:'green',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        bottom: 0,
        left: 0,
        top:0,
        

        

    }



}) 
