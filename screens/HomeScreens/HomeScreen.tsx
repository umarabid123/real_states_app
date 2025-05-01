import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../styles/globalStyle';
import AppText from '../../components/AppText/AppText';
import {Colors} from '../../contexts/theme';

const HomeScreen = () => {
  return (
    <View style={[globalStyle.container, {justifyContent: 'flex-start'}]}>
      <View>
        {/* location  */}
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 20,
            borderRadius: 30,
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
        
        <View style={{ justifyContent:'center', alignItems:'center',borderRadius:50, borderWidth:1, borderColor:Colors.primary, width:50, height:50}}>
          <Image source={require('../../assets/images/ion_notifications-outline.png')} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
