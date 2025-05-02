import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {Colors} from '../../contexts/theme';
import AppButton from '../AppButton/AppButton';

const CategoryCard = () => {
  return (
    <View
      style={{
        width: 270,
        height: 180,
        borderRadius: 30,
        borderBottomStartRadius: 0,
        overflow: 'hidden',
        backgroundColor: 'red', // for test
      }}>
      <ImageBackground
        source={require('../../assets/images/bg-img.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <View style={{paddingLeft: 20, paddingBottom: 20}}>
          <AppText
            text={'Halloween \nSale!'}
            fontSize={18}
            fontWeight={700}
            color={Colors.white}
            style={{letterSpacing: 1}}
          />
          <AppText
            text={'All discount up to 60%'}
            fontSize={10}
            color={Colors.white}
          />
        </View>
        <AppButton
          type="notText"
          source={require('../../assets/images/right-arrow-icon.png')}
          containerStyle={{
            width: 93,
            borderRadius: 0,
            borderTopEndRadius: 20,
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: Colors.lightBlue,
            justifyContent: 'center',
            alignItem: 'center',
            padding: 0,
            paddingVertical: 26,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
