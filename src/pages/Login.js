import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react';
import firebase from './firebaseConfig'
import { Entypo } from '@expo/vector-icons';

export default ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);

  function LoginFirebase() {
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      // Logado
      navigation.navigate('Home')
      var user = userCredential.user;
      
    })
    .catch((error) => {
      // Erro ao logar
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  

  
  
  return (
    <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient colors={['#2683DE', '#93BFDE', '#ffffff']} style={styles.gradient}>
    <View style={styles.container}>
      <StatusBar translucent={true}/>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.textUp}>E-mail:</Text>

      <View style={styles.inputContainer}>
      <TextInput    
      keyboardType="email-address"
      placeholder="Digite seu email"
      style={styles.input}
      value={email}
      onChangeText={ email => setEmail(email)}
      />
      </View>

      <Text style={styles.textUp}>Senha:</Text>

      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      secureTextEntry={hidePass ? true : false}
      placeholder="Digite sua senha"
      value={senha}
      onChangeText={ senha => setSenha(senha) }
      />
      <Entypo name={hidePass ? 'eye-with-line' : 'eye'}
              size={15}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
              
              /> 
      </View>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={()=>{LoginFirebase()}} >
          <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{marginHorizontal: '3%', fontWeight: 'bold',}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signupContainer}> 
        <Text style={styles.signupText}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupButton}>Cadastre-se</Text>  
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
    </TouchableWithoutFeedback>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
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
    alignItems: 'flex-end',
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

