import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <LinearGradient
      colors={["#0f172a", "#1e3a8a", "#2563eb"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          
          <Text style={styles.title}>My App 🚀</Text>
          <Text style={styles.subtitle}>
            Welcome to a beautiful experience
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Get Started</Text>
            <Text style={styles.cardDesc}>
              Login or create an account to continue
            </Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#2563eb" }]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#10b981" }]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>Secure • Fast • Modern</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 8,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.12)",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },

  cardDesc: {
    fontSize: 13,
    color: "#e2e8f0",
    marginBottom: 15,
  },

  button: {
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    color: "#cbd5e1",
    marginTop: 30,
    fontSize: 12,
  },
});