import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../styles/globalStyle';
import AppText from '../../components/AppText/AppText';
import {Colors} from '../../contexts/theme';
import { wp } from '../../contexts/constant';

const HomeScreen = () => {
  return (
    <View style={[globalStyle.container, {justifyContent: 'flex-start'}]}>
      <View style={{width:wp(90), flexDirection:'row', justifyContent:'space-between'}}>
        {/* location  */}
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 20,
            borderRadius: 50,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            borderWidth:1,
            borderColor:"#ECEDF3"
          }}>
          <Image source={require('../../assets/images/location-pin.png')} />
          <AppText
            text={'Jakarta, Indonesia'}
            fontSize={10}
            fontWeight={500}
            color={Colors.secondary}
          />
          <Image source={require('../../assets/images/chevron-down.png')} />
        </View>
        
        {/* notification section  */}
       <View style={{flexDirection:'row', gap:13, alignItems:'center'}}>
       <View style={{ justifyContent:'center', alignItems:'center',borderRadius:50, borderWidth:1, borderColor:Colors.primary, width:50, height:50}}>
          <Image source={require('../../assets/images/ion_notifications-outline.png')} />
        </View>
        <Image source={require('../../assets/images/profile-img.jpg')} style={{width:44, height:44, borderRadius:50}} />
       </View>


      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
