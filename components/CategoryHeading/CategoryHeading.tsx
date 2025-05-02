import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {Colors} from '../../contexts/theme';
import {wp} from '../../contexts/constant';

const CategoryHeading = ({title, viewText}: any) => {
  return (
    <View
      style={{
        width: wp(86),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingBottom: 20,
      }}>
      <AppText
        text={title}
        fontSize={18}
        fontWeight={700}
        color={Colors.secondary}
      />
      <AppText
        text={viewText}
        fontSize={10}
        fontWeight={600}
        color={Colors.lightBlue}
      />
    </View>
  );
};

export default CategoryHeading;

const styles = StyleSheet.create({});
