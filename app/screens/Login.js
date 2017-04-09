import React from 'react';
import ReactNative from 'react-native';

const {
  View,
} = ReactNative;

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                console.log('result is ', result);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    {/*alert('hello there', data);*/}
                    {/*alert('hello', data.accessToken.toString());*/}
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
});

export default Login;