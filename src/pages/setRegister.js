import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import firebase from './firebaseConfig';
import { Entypo } from '@expo/vector-icons';


export default () => {
    const navigation = useNavigation();
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#2683DE', '#93BFDE', '#ffffff']} style={styles.gradient}>
        <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={true}/>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
   
        
  
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Registrar-se como Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('RegisterLoja')}>
            <Text style={styles.registerText}>Registrar-se como Loja</Text>
        </TouchableOpacity>
        <View style={styles.divisor}>
          <View style={styles.divisorLine}></View>
          <Text style={{marginHorizontal: '3%', fontWeight: 'bold',}}>OU</Text>
          <View style={styles.divisorLine}></View>
        </View>
        <View style={styles.signupContainer}> 
        <Text style={styles.signupText}>Caso já possua uma conta: </Text>
            <TouchableOpacity onPress={() => navigation.navigate('setRegister')}>
            <Text style={styles.signupButton}>Fazer Logar</Text>  
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      </ScrollView>
      </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
  
  
  
  
  const styles = StyleSheet.create({
    loginContainer: {
      flexDirection: 'row',
      marginTop: '5%',
    },
    loginText: {
      color: '#000000',
      paddingRight: 5,
    },
    registerButton: {
      marginTop: '5%',
      backgroundColor: '#399fff',
      width: '85%',
      height: 42,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    registerText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 300,
      height: 300,
      marginTop: 24
    },
    inputContainer: {
      alignItems: 'center',
      flexDirection: 'row', 
      width: '85%',
      height: 42,
      backgroundColor: '#F4F3F3',
      marginBottom: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      paddingRight: 20,
    },
    input: {
      width: '100%',
      height : '100%',
      padding: 8,
    },
    forgotContainer: {
      width: '85%',
      alignItems: 'center',
    },
    forgotText: {
      color: '#399fff',
      fontWeight: 'bold',
    },
    loginButton: {
      marginTop: '5%',
      backgroundColor: '#399fff',
      width: '85%',
      height: 42,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
    },
    divisor: {
      marginTop: '10%',
      flexDirection: 'row',
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divisorLine: {
      width: '45%',
      height: 2,
      backgroundColor: '#000000',
      borderRadius: 5,
    },
    signupContainer: {
      flexDirection: 'row',
      marginTop: '5%',
    },
    signupText: {
      color: '#000000',
      paddingRight: 5,
    },
    signupButton: {
      color: '#399fff',
      fontWeight: 'bold',
    },
    gradient: {
    flex: 1,
    },
    textUp: {
    width: '85%',
    fontWeight: 'bold',
    },
  });
  
  