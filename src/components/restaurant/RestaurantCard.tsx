import React from 'react';

import {
View,
Text,
Image,
TouchableOpacity,
StyleSheet
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


export default function RestaurantCard({item}){
  const navigation = useNavigation();

return(

    <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>

      
        <Image
            source={{uri:item.image}}
            style={{ width: 60, height: 60, borderRadius: 10 }}
            defaultSource={{uri:item.image}}
            />
        

        <View style={{flex:1}}>
            <Text style={styles.name}>
            {item.name} 
            </Text>
            <Text style={styles.type}>
                {item.category}
            </Text> 
            <View style={styles.row}>
                <Text>⭐ {item.rating}</Text>
                <Text>{item.time}</Text>
                <Text>{item.price}</Text>
            </View>
        </View>

        <Ionicons
            name="heart-outline"
            size={24}
            color="#FF5A5F"
            />

    </TouchableOpacity>)

}

const styles=StyleSheet.create({

    card:{
        backgroundColor:"#fff",
        borderRadius:18,
        padding:10,
        marginTop:20,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        elevation:4
    },

    image:{
        width:90,
        height:90,
        borderRadius:15,
        marginRight:25
    },

    name:{
        fontSize:18,
        fontWeight:"700",
        marginLeft:15

    },

    type:{
        color:"#999",
        marginVertical:5,
        marginLeft:15
    },

    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:2
    }

})