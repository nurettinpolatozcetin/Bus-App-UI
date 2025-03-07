import {ImageBackground, StyleSheet, useAnimatedValue} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#9B75DA',
    flex: 1,
  },
  logostyle: {
    tintColor: '#ffff',
    width: 145,
    height: 145,
  },
  logopos: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 50,
  },
  wlcmestyle: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#ffff',
  },
  welcmepos: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 40,
  },
  uname: {
    borderBottomWidth: 1,
    fontSize: 16,
    opacity: 1,
    borderColor: '#ffff',
    width: 320,
    margin: 20,
  },
  unametxt: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 600,
  },
  unamepos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginpos: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginst: {
    backgroundColor: '#ffff',
    width: '70%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintxt: {
    color: '#9B75DA',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fgotpword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pwordtxt: {
    color: '#ffff',
    fontWeight: '500',
  },
  createbutton: {
    backgroundColor: '#ffff',
    width: 150,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  createtxt: {color: '#9B75DA', fontWeight: 'bold', fontSize: 20},
  createpos: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
});
