// /pages/Profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile({ route }) {
  const { user } = route.params;  // Access the logged-in user's data

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Name: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      {/* Add more user data if needed */}
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
