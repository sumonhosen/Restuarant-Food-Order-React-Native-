import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://10.0.2.2:8000/api';

export const registerUser = async (payload: {
  name: string;
  phone: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Registration failed');
  }
  return data;
};

export const loginUser = async (phone: string, password: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({phone, password}),
  });

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
};

export const saveAuthData = async (token: string, user: any) => {
  await AsyncStorage.setItem('userToken', token);
  await AsyncStorage.setItem('userData', JSON.stringify(user));
};

export const clearAuthData = async () => {
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userData');
};