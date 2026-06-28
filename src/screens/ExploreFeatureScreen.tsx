import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ExploreFeature({navigation}: any) {
  
    return (
        <LinearGradient
            colors={['#0f172a', '#1e3a8a', '#2563eb']}
            style={styles.container}>

    

            <ScrollView contentContainerStyle={styles.scroll}>

            <Text style={styles.title}>🚀 Explore Features</Text>
            <Text style={styles.subtitle}>
                Discover what you can do with this app
            </Text>

            {/* Feature Cards */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>🔐 Authentication</Text>
                <Text style={styles.cardText}>
                Secure login, register and token system
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>👤 User Profile</Text>
                <Text style={styles.cardText}>
                View and manage your personal data
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>⚡ Fast API</Text>
                <Text style={styles.cardText}>
                Laravel backend integration with fast response
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>📱 Modern UI</Text>
                <Text style={styles.cardText}>
                Beautiful gradient and glassmorphism design
                </Text>
            </View>

            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scroll: {
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },

  subtitle: {
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },

    header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    },

    back: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    },

    headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    },

  card: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  cardText: {
    color: '#cbd5e1',
    marginTop: 6,
    fontSize: 13,
  },

  backBtn: {
    marginTop: 20,
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  backText: {
    color: '#fff',
    fontWeight: '700',
  },
});