import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({navigation}: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const data = await AsyncStorage.getItem('userData');
    if (data) {
      setUser(JSON.parse(data));
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Avatar */}
      <View style={styles.avatarBox}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=12',
          }}
          style={styles.avatar}
        />
      </View>

      {/* User Info */}
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{user?.phone}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email || 'Not available'}</Text>
      </View>

      {/* Logout / Back */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.logoutText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  },

  avatarBox: {
    alignItems: 'center',
    marginBottom: 25,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#2563eb',
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  label: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 10,
  },

  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  logoutBtn: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontWeight: '700',
  },
});