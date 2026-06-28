import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import SearchBar from '../../components/restaurant/SearchBar';
import CategoryChip from '../../components/restaurant/CategoryChip';
import OfferBanner from '../../components/restaurant/OfferBanner';
import RestaurantCard from '../../components/restaurant/RestaurantCard';

import restaurants from '../../data/restaurants';

export default function RestaurantListScreen(){

return(

    <SafeAreaView style={styles.container}>

        <SearchBar/>

        <CategoryChip/>

        <OfferBanner/>

        <FlatList
            data={restaurants}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=><RestaurantCard item={item}/>}
        />

    </SafeAreaView>)

}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#F7F8FA",
        padding:15
    }

})