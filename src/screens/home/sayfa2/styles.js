import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#9B75DA',
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  headericons: {
    tintColor: '#ffff',
    width: 45,
    height: 45,
  },
  loopicon: {
    width: 35,
    height: 35,
    tintColor: '#ffff',
  },
  locationtxt: {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 25,
    marginHorizontal: 20,
  },
  headerbottomstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  middlebar: {
    backgroundColor: '#ffff',
    width: 370,
    height: 250,
    borderRadius: 20,
    justifyContent: 'center',
  },
  middlebarpos: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  midicons: {
    width: 25,
    height: 25,
    tintColor: '#ffff',
  },
  iconbackground1: {
    backgroundColor: 'green',
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  iconbackground2: {
    backgroundColor: '#9B75DA',
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  txtlocmid: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  locpos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ticketstyle: {
    backgroundColor: '#9B75DA',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketpos: {
    flexDirection: 'column',
    margin: 15,
    alignItems: 'center',
  },
  ticketxt: {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 20,
    marginHorizontal: 20,
  },
  pricetxt: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
