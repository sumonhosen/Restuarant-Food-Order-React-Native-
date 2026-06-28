
import React, {useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert,ActivityIndicator,KeyboardAvoidingView,Platform,ScrollView} from 'react-native';

import FormInput from '../components/FormInput';
import {loginUser, saveAuthData} from '../services/authService';
import {validateLogin} from '../utils/validate';
import {RootStackParamList} from '../types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from "react-native-linear-gradient";
import {SafeAreaView} from 'react-native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({navigation}: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const validationErrors = validateLogin(phone, password);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const data = await loginUser(phone, password);
      // data = { token, user }
      await saveAuthData(data.token, data.user);

      Alert.alert('Success', 'Login Successful', [
        {
          text: 'OK',
          onPress: () =>
            navigation.reset({
            index: 0,
            routes: [{name: 'RestaurantList'}],
          })
        },
      ]);
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Login failed');
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

            <Text style={styles.logo}>🔐</Text>

            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Login to continue your journey
            </Text>

            <View style={styles.formContainer}>
              <FormInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={(t) => {
                  setPhone(t.replace(/[^0-9]/g, ''));
                  setErrors((p: any) => ({...p, phone: ''}));
                }}
                keyboardType="number-pad"
                error={errors.phone}
              />

              <FormInput
                placeholder="Password"
                value={password}
                onChangeText={(t) => {
                  setPassword(t);
                  setErrors((p: any) => ({...p, password: ''}));
                }}
                secureTextEntry
                error={errors.password}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Login</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>
                  Don't have an account?
                  <Text style={styles.signUp}> Sign Up</Text>
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
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 18,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 22,
    color: '#e2e8f0',
    fontSize: 15,
  },

  signUp: {
    color: '#93c5fd',
    fontWeight: '700',
  },
});