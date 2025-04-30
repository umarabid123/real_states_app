import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle'
import AppText from '../../components/AppText/AppText'
import { Colors } from '../../contexts/theme'
import AppButton from '../../components/AppButton/AppButton'

const bgImage = require('../../assets/images/bg-img.png')
const logoImage = require('../../assets/images/logo.png')

const OnBoardingScreen = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode='cover'>
      <View style={[globalStyle.container, styles.overlay]}>
      <StatusBar barStyle='dark-content' backgroundColor={'transparent'}  />
        <View />

        <View style={styles.logoContainer}>
          <Image source={logoImage} resizeMode='contain' />
          <AppText
            text={'Rise\nReal Estate'}
            color={Colors.white}
            fontWeight={700}
            fontSize={36}
            style={styles.logoText}
          />
        </View>

        <View style={styles.footer}>
          <AppButton text="let's start" route='Location' />
          <AppText
            text="Made with love"
            style={styles.footerText}
            fontSize={10}
            color={Colors.lightGray}
          />
          <AppText
            text="v.1.0"
            style={styles.footerVersion}
            fontSize={10}
            fontWeight={700}
            color={Colors.lightGray}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(33, 98, 138, 0.5)',
    justifyContent: 'space-between',
    paddingBottom: 23,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    width: 190,
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
  footer: {
    marginTop: 192,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 25,
  },
  footerVersion: {
    textAlign: 'center',
  },
})
