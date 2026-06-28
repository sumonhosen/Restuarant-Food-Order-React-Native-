import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {clearAuthData} from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DashboardScreen({navigation}: any) {

    useEffect(() => {
        const check = async () => {
            const token = await AsyncStorage.getItem('userToken');

            if (!token) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
            });
            }
        };

        check();
    }, []);

    const handleLogout = async () => {
        try {
            await clearAuthData(); 

            Alert.alert(
                'Logout',
                'You have been logged out',
                [
                    {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => {
                        console.log('Logout cancelled');
                    },
                    },
                    {
                    text: 'OK',
                    onPress: () => {
                        navigation.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                        });
                    },
                    },
                ],
                {cancelable: true}
                );
            
        } catch (error) {
            console.log('Logout error:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
        
        {/* HEADER */}
        <View style={styles.header}>
            <Text style={styles.welcome}>Welcome 👋</Text>
            <Text style={styles.subtitle}>Your dashboard overview</Text>
        </View>

        {/* CARDS */}
        <View style={styles.cardContainer}>
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Profile</Text>
                <Text style={styles.cardValue}>View & Edit</Text>
            </View>

            <View style={styles.card}>
            <Text style={styles.cardTitle}>Orders</Text>
            <Text style={styles.cardValue}>12 Active</Text>
            </View>

            <View style={styles.card}>
            <Text style={styles.cardTitle}>Messages</Text>
            <Text style={styles.cardValue}>5 New</Text>
            </View>

            <View style={styles.card}>
            <Text style={styles.cardTitle}>Settings</Text>
            <Text style={styles.cardValue}>Manage App</Text>
            </View>

        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.actionBox}>
            
            <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.btnText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('ExploreFeature')}>
            <Text style={styles.btnText}>Explore Features</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },

  header: {
    padding: 20,
    backgroundColor: '#4f46e5',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  welcome: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#e0e0ff',
    marginTop: 5,
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },

  card: {
    backgroundColor: '#fff',
    width: '47%',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardValue: {
    marginTop: 5,
    color: '#666',
  },

  actionBox: {
    padding: 20,
  },

  primaryBtn: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },

  secondaryBtn: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },

  logoutBtn: {
    backgroundColor: '#ef4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});