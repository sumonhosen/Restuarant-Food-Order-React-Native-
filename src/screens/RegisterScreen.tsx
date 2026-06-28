import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView,ScrollView,Alert} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import FormInput from '../components/FormInput';
import {registerUser} from '../services/authService';
import {validateRegister} from '../utils/validate';

import LinearGradient from "react-native-linear-gradient";
import {SafeAreaView} from 'react-native';


export default function RegisterScreen({navigation}: {navigation: NavigationProp<any>}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const validationErrors = validateRegister(name, phone, password);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name: name.trim(),
        phone: phone.trim(),
        password,
      });

      Alert.alert('Success', 'Registration successful', [
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#0f172a', '#1e3a8a', '#2563eb']}
      style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>

            <Text style={styles.logo}>📝</Text>

            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Join us and start your journey
            </Text>

            <View style={styles.formContainer}>
              <FormInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                error={errors.name}
              />

              <FormInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={(t) =>
                  setPhone(t.replace(/[^0-9]/g, ''))
                }
                keyboardType="number-pad"
                error={errors.phone}
              />

              <FormInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                error={errors.password}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
                disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                  Already have an account?
                  <Text style={styles.login}> Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 30,
  },

  logo: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },

  subtitle: {
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
    fontSize: 15,
  },

  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  button: {
    backgroundColor: '#10b981',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 22,
    color: '#e2e8f0',
    fontSize: 15,
  },

  login: {
    color: '#93c5fd',
    fontWeight: '700',
  },
});
