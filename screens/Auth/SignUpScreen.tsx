import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AppButton from '../../components/AppButton/AppButton'
import AppText from '../../components/AppText/AppText'
import Header from '../../components/Header/Header'
import CustomTextInput from '../../components/TextInput/TextInput'
import TopText from '../../components/TopText/TopText'
import { Colors } from '../../contexts/theme'
import { globalStyle } from '../../styles/globalStyle'

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={[globalStyle.container, styles.mainContainer]}>
      <Header />
      <TopText titleText={"Create"} description={"quis nostrud exercitation ullamco laboris nisi ut"} titleSubText={"your account"} styles={styles.topText} />
      <View style={styles.formContainer}>
      <CustomTextInput
          source={require('../../assets/images/Profile.png')}
          placeholder='Full Name'
        />
        <CustomTextInput
          source={require('../../assets/images/primary-mail-icon.png')}
          placeholder='Email'
        />
        <CustomTextInput
          source={require('../../assets/images/password.png')}
          placeholder='Password'
          secureTextEntry={!showPassword}
        />

        <View style={styles.rowBetween}>
          <AppText text="Terms of service" color={Colors.secondary} fontSize={12} fontWeight={600} />
          <AppText
            onPress={() => setShowPassword(!showPassword)}
            text={showPassword ? 'Hide Password' : 'Show Password'}
            color={Colors.secondary}
            fontSize={12}
            fontWeight={600}
          />
        </View>

        <AppButton
          text='Register'
          containerStyle={styles.loginButton}
        />
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-start',
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  topText: {
    marginTop: 50,
  },
  formContainer: {
    marginTop: 50,
    gap: 15,
    alignItems: 'center',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    width: 278,
    marginTop: 50,
    alignSelf: 'center',
  },
})
