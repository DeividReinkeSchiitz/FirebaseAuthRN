import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from 'react-native-firebase';
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isAuthenticated: false,
    };
  }

  buttonPressed = () => {
    alert('ola');
  };

  login = async () => {
    const {password, email} = this.state;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      this.setState({isAuthenticated: true});
      console.log(user);
    } catch (error) {
      alert('no');
    }
  };
  loginGoogle = async () => {};
  loginFacebook = async () => {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Firebase Authentication</Text>
        <TextInput
          blurOnSubmit={true}
          returnKeyType="send"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.input}
          placeholder="Informe seu email"
          placeholderTextColor="#04d361"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          autoCorrect={false}
          style={styles.input}
          placeholderTextColor="#04d361"
          placeholder="Informe sua senha"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.buttonsSign}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#ff0000', flex: 1}]}
            onPress={this.loginGoogle}>
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#44619d', flex: 1}]}
            onPress={this.loginFacebook}>
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {this.state.isAuthenticated ? alert('AE') : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsSign: {
    flexDirection: 'row-reverse',
  },
  title: {
    color: '#04d361',
    fontSize: 45,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    padding: 10,
    margin: 16,
    borderColor: '#04d361',
    borderRadius: 15,
    borderWidth: 2,
    height: 50,
    fontSize: 17,
    paddingHorizontal: 30,
    alignSelf: 'stretch',
    color: '#04d361',
  },
  button: {
    marginHorizontal: 16,
    backgroundColor: '#04d361',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    height: 50,
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0a0d',
  },
});
