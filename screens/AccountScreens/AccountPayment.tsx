import { FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../../styles/globalStyle'
import Header from '../../components/Header/Header'
import { Colors } from '../../contexts/theme'
import AppText from '../../components/AppText/AppText'
import { wp } from '../../contexts/constant'
import AppButton from '../../components/AppButton/AppButton'
import CustomTextInput from '../../components/TextInput/TextInput'

const AccountPayment = () => {
  const [activeMethod, setActiveMethod] = useState(0)
  const paymentMethodData = [
    {
      id: 1,
      title: 'Paypal',
      icon: require('../../assets/images/paypal.png'),
      iconWhite: require('../../assets/images/paypal-white-icon.png')
    },
    {
      id: 2,
      title: 'Mastercard',
      icon: require('../../assets/images/mastercard.png'),
      iconWhite: require('../../assets/images/mastercard-white-icon.png')
    },
    {
      id: 3,
      title: 'Visa',
      icon: require('../../assets/images/visa.png'),
      iconWhite: require('../../assets/images/visa.png')
    }
  ]

  return (
    <View style={[globalStyle.container, { justifyContent: 'flex-start', paddingTop: 24 }]}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
      <Header type='button' />
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: wp(90), paddingTop: 50, paddingBottom: 24 }}>
          <AppText
            text={'Add Your'}
            style={{ lineHeight: 40, paddingBottom: 20 }}
            fontSize={25}
            fontWeight={500}
            type='subText'
            subText={'\npayment method '}
            color={'#252B5C'}
            subTextStyle={{ fontWeight: 800, color: '#234F68' }}
          />
          <AppText text={'You can edit this later on your account setting.'} fontSize={12} color={Colors.mediumGray} />
          <Image source={require('../../assets/images/credit-card.png')} style={{ width: wp(90), resizeMode: 'contain' }} />

          <FlatList
            data={paymentMethodData}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => setActiveMethod(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: activeMethod === index ? Colors.lightBlue : Colors.softGray,
                  borderRadius: 40,
                  paddingHorizontal: 25,
                  paddingVertical: 15,
                }}
              >
                <Image source={activeMethod === index ? item.iconWhite : item?.icon} />
                <AppText
                  text={item?.title}
                  fontSize={10}
                  fontWeight={500}
                  color={activeMethod === index ? Colors.white : Colors.mediumGray}
                />
              </Pressable>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            contentContainerStyle={{ paddingHorizontal: 16, marginTop: 20 }}
          />

          {activeMethod === 0 && (
            <View style={{ marginTop: 15 }}>
              <CustomTextInput placeholder='Name' source={require('../../assets/images/Profile.png')} />
              <CustomTextInput inputContainerStyle={{ marginTop: 15 }} placeholder='Email' source={require('../../assets/images/primary-mail-icon.png')} />
            </View>
          )}
          {activeMethod === 1 && (
            <View style={{ marginTop: 15 }}>
              <CustomTextInput placeholder='Card Number' source={require('../../assets/images/Profile.png')} />
              <CustomTextInput inputContainerStyle={{ marginTop: 15 }} placeholder='Expiry Date' source={require('../../assets/images/wallet.png')} />
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
             <CustomTextInput inputContainerStyle={{ marginTop: 15, width:'48%' }} placeholder='Date' source={require('../../assets/images/calendar.png')} />
             <CustomTextInput inputContainerStyle={{ marginTop: 15,width:'48%'}} placeholder='CVV' source={require('../../assets/images/wallet.png')} /> 
             </View>
            </View>
          )}
        </View>

        <AppButton text='Next' route='Profile' containerStyle={{ backgroundColor: Colors.primary, width: 278 }} />
      </ScrollView>
    </View>
  )
}

export default AccountPayment

const styles = StyleSheet.create({})
