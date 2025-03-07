import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  return (
    <View style={Style.background}>
      <View style={Style.headerStyle}>
        <TouchableOpacity>
          <Image source={Icons.back2} style={Style.headericons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.menu3} style={Style.headericons} />
        </TouchableOpacity>
      </View>
      <View style={Style.headerbottomstyle}>
        <Text style={Style.locationtxt}>Location 1</Text>
        <TouchableOpacity>
          <Image source={Icons.loop} style={Style.loopicon} />
        </TouchableOpacity>
        <Text style={Style.locationtxt}>Location 2</Text>
      </View>
      <View style={Style.middlebarpos}>
        <View style={{justifyContent: 'center'}}>
          <View style={Style.middlebar}>
            <View>
              <View style={Style.locpos}>
                <View style={Style.iconbackground1}>
                  <Image source={Icons.send} style={Style.midicons} />
                </View>
                <Text style={Style.txtlocmid}>Location 1</Text>
              </View>
              <View style={Style.locpos}>
                <View style={Style.iconbackground2}>
                  <Image source={Icons.location} style={Style.midicons} />
                </View>
                <Text style={Style.txtlocmid}>Location 2</Text>
              </View>
            </View>
            <View>
              <View style={Style.ticketpos}>
                <View>
                  <Text style={Style.pricetxt}>Price: $4.75</Text>
                </View>
                <TouchableOpacity>
                  <View style={Style.ticketstyle}>
                    <Text style={Style.ticketxt}>Buy Ticket</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <View style={Style.middlebar}>
              <View>
                <View style={Style.locpos}>
                  <View style={Style.iconbackground1}>
                    <Image source={Icons.send} style={Style.midicons} />
                  </View>
                  <Text style={Style.txtlocmid}>Location 1</Text>
                </View>
                <View style={Style.locpos}>
                  <View style={Style.iconbackground2}>
                    <Image source={Icons.location} style={Style.midicons} />
                  </View>
                  <Text style={Style.txtlocmid}>Location 2</Text>
                </View>
              </View>
              <View>
                <View style={Style.ticketpos}>
                  <View>
                    <Text style={Style.pricetxt}>Price: $4.75</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={Style.ticketstyle}>
                      <Text style={Style.ticketxt}>Buy Ticket</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
