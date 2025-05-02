import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText from '../AppText/AppText';

const TopLocation = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.softGray,
        padding: 10,
        paddingRight: 16,
        borderRadius: 30,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/bg-img.jpg')}
        style={{width: 40, height: 40, borderRadius: 50}}
      />
      <AppText
        text={'Bali'}
        fontSize={10}
        color={Colors.secondary}
        fontWeight={500}
      />
    </View>
  );
};

export default TopLocation;

const styles = StyleSheet.create({});
