import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  return (
    <View style={Style.background}>
      <View>
        <View style={Style.logopos}>
          <Image source={Icons.trip} style={Style.logostyle} />
        </View>
        <View style={Style.welcmepos}>
          <Text style={Style.wlcmestyle}>Welcome!</Text>
        </View>
        <View style={Style.unamepos}>
          <View style={Style.uname}>
            <TextInput
              style={Style.unametxt}
              placeholder="Username"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={Style.uname}>
            <TextInput
              style={Style.unametxt}
              placeholder="Password"
              placeholderTextColor={'white'}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={Style.loginpos}>
          <TouchableOpacity style={Style.loginst}>
            <Text style={Style.logintxt}>Log In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Style.fgotpword}>
          <Text style={Style.pwordtxt}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={Style.createpos}>
          <View>
            <Text style={Style.pwordtxt}>Didn't you have an account?</Text>
          </View>

          <View>
            <TouchableOpacity style={Style.createbutton}>
              <Text style={Style.createtxt}>Create one!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
