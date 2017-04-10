import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const FBSDK = require('react-native-fbsdk');

const {
  GraphRequest,
  LoginButton,
  AccessToken,
  GraphRequestManager,
} = FBSDK;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pic: '',
      isLoggedIn: false,
    };
    this.responseInfoCallback = this.responseInfoCallback.bind(this);
  }

  componentWillMount() {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture,email,friends',
      null,
      this.responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  responseInfoCallback(error, result) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      console.log('hihihi=======>', result);
      this.setState({ name: result.name, pic: result.picture.data.url });
    }
  }

  render() {
    const context = this;
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                console.log('result is ' + result);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log('-=-----------', context.props);
                    console.log('hi, data is ', data);
                    context.props.navigation.navigate('Me');
                  },
                );
              }
            }
          }
          onLogoutFinished={() => alert("logout.")} />
      </View>
    );
  }
}

export default Login;
