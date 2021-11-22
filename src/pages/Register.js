import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import firebase from './firebaseConfig';
import { Entypo } from '@expo/vector-icons';


export default ({ navigation }) => {
  // const userCollections = firestore().userCollections('Usuario')
 
  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState('');
  const [cell, setCell ] = useState('');
  const [cpf, setCpf ] = useState('');
  const [nome, setNome ] = useState('');
  const [hidePass, setHidePass] = useState(true);
  

  function Limpar(){
    set
  }


function writeUserData(nome, cell, senha, email, cpf, userID) {
  firebase.database().ref('users').once('value', (data) => {
    console.log(data.toJSON)
  })

  firebase.database().ref('users/003').set(
    {
         
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        cell: cell,
    } 
).then(() => {
  console.log('INSERTED !');
}).catch((error) => {
  console.log(error);
});

firebase.auth().createUserWithEmailAndPassword(email, senha)
.then((userCredential) => {
  var user = userCredential.user;
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
});

}


 
  return (
    <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient colors={['#2683DE', '#93BFDE', '#ffffff']} style={styles.gradient}>
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true}/>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
 
      <Text style={styles.textUp}>Nome de Usuário:</Text>
      <View style={styles.inputContainer}>
      <TextInput
      placeholder="Digite seu Nome de Usuário"
      style={styles.input}
      value={nome}
      onChangeText={ nome => setNome(nome) }
      
      />
      </View>

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

      <Text style={styles.textUp}>CPF:</Text>

      <View style={styles.inputContainer}>
      <TextInputMask
      placeholder="Digite seu CPF"
      style={styles.input}
      type={'cpf'}
      value={cpf}
      onChangeText={ cpf => setCpf(cpf) }
      
      
      />
      </View>

      <Text style={styles.textUp}>Telefone:</Text>

      <View style={styles.inputContainer}>
      <TextInputMask
      type={'cel-phone'}
      options={{
      maskType: 'BRL',
      whithDDD: true,
      ddMask: '(99)'
      }}
      placeholder="Digite seu telefone"
      style={styles.input}
      value={cell}
      onChangeText={ cell => setCell(cell) }
      
      
      />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={()=>{writeUserData(nome, cell, senha, email, cpf)}}>
          <Text style={styles.registerText}>Registre-se</Text>
      </TouchableOpacity>
      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{marginHorizontal: '3%', fontWeight: 'bold',}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>
      <View style={styles.loginContainer}> 
        <Text style={styles.loginText}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButton}>Fazer Login</Text>  
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  loginContainer: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  loginText: {
    color: '#000000',
    paddingRight: 5,
  },
  loginButton: {
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

