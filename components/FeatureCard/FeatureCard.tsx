import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../contexts/theme';
import AppButton from '../AppButton/AppButton';
import AppText from '../AppText/AppText';

const FeatureCard = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.softGray,
        width: 268,
        padding: 8,
        flexDirection:'row',
        alignItems:'center',
        gap:12,
        borderRadius:30
      }}>

        {/* image section  */}
      <View style={{position:'relative', width:134}}>
      <Image
        source={require('../../assets/images/bg-img.jpg')}
        style={{width: 130, height: 140, borderRadius:24}}
      />
      <View
        style={{
          backgroundColor: Colors.primary,
          width: 25,
          height: 25,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position:'absolute',
          top:12,
          left:8
        }}>
        <Image source={require('../../assets/images/heart-white.png')} />
      </View>
      <AppButton
        text="Apartment"
        containerStyle={{
          width: 63,
          paddingVertical: 9,
          backgroundColor: Colors.lightBlue,
          position:'absolute',
          bottom:14,
          left:12,
          borderRadius:8
        }}
        textStyle={{fontSize:8, fontWeight:400}}
      />
      </View>

      {/* text section  */}
      <View>
        <AppText text={'Sky Dandelions \nApartment'} fontSize={12} fontWeight={700} color={Colors.secondary} />

        {/* rate section  */}

        <View style={{flexDirection:'row', gap:3, alignItems:'center',paddingVertical:8}}>
            <Image source={require('../../assets/images/star.png')} />
            <AppText text={'4.9'} fontSize={8} fontWeight={700} color={Colors.lightBlue} />
        </View>

        {/* location section  */}

        <View style={{flexDirection:'row', gap:3, alignItems:'center',paddingBottom:29}}>
            <Image source={require('../../assets/images/location-pin.png')} />
            <AppText text={'Jakarta, Indonesia'} fontSize={8} color={Colors.lightBlue} />
        </View>

        <AppText text={'$290'} fontWeight={600} fontSize={16} color={Colors.secondary} type='subText' subText='/month' subTextStyle={{fontWeight:500,fontSize:8}} />
      </View>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({});
