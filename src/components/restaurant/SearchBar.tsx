import React from 'react';

import {View,TextInput,StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar(){

    return(

        <View style={styles.container}>
            <Ionicons name="search" size={22} color="#888" />
            <TextInput placeholder="Search Restaurant..." style={styles.input}/>

        </View>)

}

const styles=StyleSheet.create({

    container:{
        backgroundColor:"#fff",
        borderRadius:15,
        paddingHorizontal:15,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
        height:55
    },

    input:{
        flex:1,
        marginLeft:10
    }

})