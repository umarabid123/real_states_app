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
        paddingHorizontal: 8,
      }}>

        {/* image section  */}
      <View>
      <Image
        source={require('../../assets/images/feature-card.png')}
        style={{width: 130, height: 140}}
      />
      <View
        style={{
          backgroundColor: Colors.primary,
          width: 25,
          height: 25,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/heart-white.png')} />
      </View>
      <AppButton
        text="Apartment"
        containerStyle={{
          width: 63,
          paddingVertical: 9,
          backgroundColor: Colors.lightBlue,
        }}
      />
      </View>

      {/* text section  */}
      <View>
        <AppText text={'Sky Dandelions \nApartment'} fontSize={12} fontWeight={700} color={Colors.secondary} />

        {/* rate section  */}

        <View style={{flexDirection:'row', gap:2, alignItems:'center'}}>
            <Image source={require('../../assets/images/star.png')} />
            <AppText text={'4.9'} fontSize={8} fontWeight={700} color={Colors.lightBlue} />
        </View>
      </View>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({});
