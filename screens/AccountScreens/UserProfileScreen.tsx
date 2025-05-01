import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../../styles/globalStyle';
import Header from '../../components/Header/Header';
import AppText from '../../components/AppText/AppText';
import {wp} from '../../contexts/constant';
import {Colors} from '../../contexts/theme';
import CustomTextInput from '../../components/TextInput/TextInput';
import AppButton from '../../components/AppButton/AppButton';
import Modal from 'react-native-modal';

const UserProfileScreen = () => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <View style={[globalStyle.container, {justifyContent: 'flex-start'}]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header />
      <View style={{width: wp(90), marginTop: 50}}>
        <AppText
          text={'Fill your'}
          fontSize={25}
          fontWeight={500}
          type="subText"
          subText={'information \nbelow'}
          color={'#252B5C'}
          subTextStyle={{fontWeight: 800, color: '#234F68'}}
        />
        <AppText
          text={'You can edit this later on your account setting.'}
          fontSize={12}
          color={Colors.mediumGray}
          style={{marginTop: 20}}
        />
        <View
          style={{
            alignSelf: 'center',
            marginTop: 50,
            position: 'relative',
            width: 100,
          }}>
          <Image source={require('../../assets/images/avatar.png')} />
          <Image
            source={require('../../assets/images/edit.png')}
            style={{position: 'absolute', bottom: -3, right: 6}}
          />
        </View>
        <CustomTextInput
          placeholder="Name"
          inputContainerStyle={{marginTop: 38}}
          source={require('../../assets/images/Profile.png')}
        />
        <CustomTextInput
          inputContainerStyle={{marginTop: 15}}
          placeholder="Phone"
          source={require('../../assets/images/phone.png')}
        />
        <CustomTextInput
          inputContainerStyle={{marginTop: 15}}
          placeholder="Email"
          source={require('../../assets/images/primary-mail-icon.png')}
        />
        <AppButton
          text="Save"
          containerStyle={{
            backgroundColor: Colors.primary,
            marginTop: 32,
            width: 278,
            alignSelf: 'center',
          }}
          onPress={() => setActiveModal(true)}
        />
      </View>
      {activeModal && (   
        <Modal
          isVisible={activeModal}
          style={{position: 'relative', margin: 0}}
          backdropColor="#234F68AB"
          backdropOpacity={0.5} 
          statusBarTranslucent
          coverScreen
          onBackdropPress={() => setActiveModal(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={500}
          animationOutTiming={500}
          >
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '100%',
              padding: 0,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 467,
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/alert-success-icon.png')}
              style={{marginBottom: 20}}
            />
            <AppText
              text={'Account'}
              style={{textAlign: 'center', marginBottom: 20}}
              fontSize={25}
              fontWeight={500}
              type="subText"
              subText={'successfully \ncreated'}
              color={'#252B5C'}
              subTextStyle={{fontWeight: 800, color: '#234F68'}}
            />
            <AppText
              text={'Lorem ipsum dolor sit amet, consectetur.'}
              fontSize={12}
              color={Colors.mediumGray}
            />
            <AppButton
              text="Finish"
              containerStyle={{
                backgroundColor: Colors.primary,
                width: 278,
                marginTop: 20,
              }}
             route='Home'
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({});
