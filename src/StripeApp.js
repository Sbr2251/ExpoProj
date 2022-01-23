import React, { useState } from 'react';
import { View,StyleSheet, Button, Alert,Text} from 'react-native';
import { CardField,useConfirmPayment } from '@stripe/stripe-react-native';

const StripeApp = (props) => {
  const [cardDetails,setCardDetails] = useState();
  const [count,setCount] = useState(0);
  const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const url = 'https://us-central1-helloworld-355f2.cloudfunctions.net/create_payment_intent';
    const total = count * 2;
    const amount = total * 100;
    const response = await fetch(`${url}?amount=${amount}&currency=usd`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return {clientSecret, error};
  };

  const tester = async () => {
    if(!cardDetails?.complete) {
      Alert.alert('Please Enter Card Details');
      return;
    }
    if(count === 0) {
      Alert.alert('You must buy atleast one Coin');
      return;
    }
    const billingDetails = {
      email: "sbr2251@gmail.com"
    };
    try {
      const {clientSecret, error} = await fetchPaymentIntentClientSecret();
      if (error) {
        Alert.alert("Unable to process payment");
      } else {
        const {paymentIntent, error} = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          Alert.alert("Payment confirmation error: " + error.message);
        } else if(paymentIntent) {
          Alert.alert("Success");
          setCount(0);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
        <View style={styles.container}>
          <Text>How many coins would you like to buy: {count}</Text>
          <Button
            title = "Add"
            onPress={() => {
              setCount(count+1);
            }}
          />
          <Text>Total: ${count * 2}</Text>
          <CardField 
            postalCodeEnabled = {true}
            placeholder = {{
              number: "4242 4242 4242 4242",
            }}
            cardStyle = {styles.card}
            style= {styles.cardContainer}
            onCardChange={cardDetails => {
              setCardDetails(cardDetails);
            }}
          />
          <Button
            variant="primary"
            disabled={loading}
            title="Checkout, New?"
            onPress={tester}
          />
        </View>
      );} 
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 20,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  }
});