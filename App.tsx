import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import StripeApp from './src/StripeApp';

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey= "pk_test_51K4v8OF05SKWo765zGi9eYXO0k7SkJyn5MHVUkZWnfHTHec5oDEQ7MMCJc1eFUZ3gu5M5HdMMOL0QFi7DuHJA7h000wNNC7q0Z">
        <StripeApp />
      </StripeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
