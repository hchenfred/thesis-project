import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  View,
} = ReactNative;

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
    return (
      <View>
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
                    console.log('hi, data is ', data);
                    {/*alert('hello there', data);*/}
                    {/*alert('hello', data.accessToken.toString());*/}
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
