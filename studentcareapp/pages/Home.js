// /pages/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;  // Access the logged-in user's data

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, {user.username}!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="View Subjects" onPress={() => navigation.navigate("Subjects")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
});
