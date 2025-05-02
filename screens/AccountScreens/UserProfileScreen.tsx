import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
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
    <View style={[globalStyle.container, styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.formWrapper}>
          <AppText
            text="Fill your"
            fontSize={25}
            fontWeight={500}
            type="subText"
            subText="information \nbelow"
            color="#252B5C"
            subTextStyle={styles.subTextStyle}
          />
          <AppText
            text="You can edit this later on your account setting."
            fontSize={12}
            color={Colors.mediumGray}
            style={styles.helperText}
          />

          <View style={styles.avatarContainer}>
            <Image source={require('../../assets/images/avatar.png')} />
            <Image
              source={require('../../assets/images/edit.png')}
              style={styles.editIcon}
            />
          </View>

          <CustomTextInput
            placeholder="Name"
            inputContainerStyle={styles.inputMarginTop38}
            source={require('../../assets/images/Profile.png')}
          />
          <CustomTextInput
            placeholder="Phone"
            inputContainerStyle={styles.inputMarginTop15}
            source={require('../../assets/images/phone.png')}
          />
          <CustomTextInput
            placeholder="Email"
            inputContainerStyle={styles.inputMarginTop15}
            source={require('../../assets/images/primary-mail-icon.png')}
          />

          <AppButton
            text="Save"
            containerStyle={styles.saveButton}
            onPress={() => setActiveModal(true)}
          />
        </View>
      </ScrollView>

      {activeModal && (
        <Modal
          isVisible={activeModal}
          style={styles.modalStyle}
          backdropColor="#234F68AB"
          backdropOpacity={0.5}
          statusBarTranslucent
          coverScreen
          onBackdropPress={() => setActiveModal(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={500}
          animationOutTiming={500}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../assets/images/alert-success-icon.png')}
              style={styles.successIcon}
            />
            <AppText
              text="Account"
              style={styles.modalTitle}
              fontSize={25}
              fontWeight={500}
              type="subText"
              subText={"successfully \ncreated"}
              color="#252B5C"
              subTextStyle={styles.subTextStyle}
            />
            <AppText
              text="Lorem ipsum dolor sit amet, consectetur."
              fontSize={12}
              color={Colors.mediumGray}
            />
            <AppButton
              text="Finish"
              containerStyle={styles.finishButton}
              route="Home"
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  scrollContent: {
    alignItems: 'center',
  },
  formWrapper: {
    width: wp(90),
    marginTop: 50,
    paddingBottom: 100,
  },
  subTextStyle: {
    fontWeight: '800',
    color: '#234F68',
  },
  helperText: {
    marginTop: 20,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginTop: 50,
    position: 'relative',
    width: 100,
  },
  editIcon: {
    position: 'absolute',
    bottom: -3,
    right: 6,
  },
  inputMarginTop38: {
    marginTop: 38,
  },
  inputMarginTop15: {
    marginTop: 15,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    marginTop: 32,
    width: 278,
    alignSelf: 'center',
  },
  modalStyle: {
    position: 'relative',
    margin: 0,
  },
  modalContent: {
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
  },
  successIcon: {
    marginBottom: 20,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: Colors.primary,
    width: 278,
    marginTop: 20,
  },
});
