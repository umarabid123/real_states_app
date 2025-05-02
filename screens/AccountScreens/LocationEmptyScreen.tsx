import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import Header from '../../components/Header/Header';
import {wp} from '../../contexts/constant';
import {globalStyle} from '../../styles/globalStyle';
import AppText from '../../components/AppText/AppText';
import {Colors} from '../../contexts/theme';
import AppButton from '../../components/AppButton/AppButton';

const LocationEmptyScreen = () => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Header type={'button'} />

        <View style={styles.textContainer}>
          <AppText
            text={'Add your'}
            color={Colors.secondary}
            fontSize={25}
            fontWeight={500}
            type="subText"
            subTextStyle={styles.subTextStyle}
            subText="location "
          />
          <AppText
            text={'You can edit this later on your account setting.'}
            fontSize={12}
            color={Colors.mediumGray}
            style={styles.descriptionText}
          />
        </View>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            onRegionChangeComplete={console.log}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <Pressable
            style={styles.searchBox}
            onPress={() => setActiveModal(true)}>
            <View style={styles.searchContent}>
              <Image
                source={require('../../assets/images/location-pin.png')}
                resizeMode="cover"
              />
              <AppText
                text={'Location detail'}
                fontSize={12}
                color={Colors.mediumBarelyGray}
                style={styles.locationDetailText}
              />
            </View>
            <Image source={require('../../assets/images/right-arrow.png')} />
          </Pressable>

          <AppButton
            text="Next"
            containerStyle={styles.nextButton}
            route="Preferable"
          />
        </View>

        {activeModal && (
          <Modal>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1}}>
              <MapView
                style={styles.mapModalStyle}
                onRegionChangeComplete={console.log}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />

              <Header headerStyle={{position: 'absolute', top: 14, left: 14}} />

              <View style={[styles.searchBox, styles.modalSearchBox]}>
                <View style={styles.searchRow}>
                  <Image
                    source={require('../../assets/images/search-icon.png')}
                    resizeMode="cover"
                  />
                  <TextInput
                    placeholder="Try find “how to”"
                    style={styles.searchInput}
                  />
                </View>
                <Image
                  source={require('../../assets/images/mic.png')}
                  resizeMode="cover"
                  style={{borderLeftWidth: 4, borderColor: '#000'}}
                />
              </View>

              <View style={styles.locationDetailContainer}>
                <AppText
                  text={'Location detail'}
                  fontSize={18}
                  fontWeight={700}
                  color={Colors.secondary}
                />
                <View style={styles.locationRow}>
                  <View style={styles.locationIconBox}>
                    <Image
                      source={require('../../assets/images/location-pin-map.png')}
                      resizeMode="cover"
                    />
                  </View>
                  <AppText
                    text={
                      'Srengseng, Kembangan, West Jakarta City, Jakarta 11630'
                    }
                    fontSize={12}
                    color={Colors.mediumGray}
                    style={styles.locationText}
                  />
                </View>
              </View>

              <AppButton
                text="Choose your location"
                containerStyle={styles.chooseLocationButton}
                onPress={() => setActiveModal(false)}
              />
            </KeyboardAvoidingView>
          </Modal>
        )}
      </ScrollView>
    </View>
  );
};

export default LocationEmptyScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyle.container,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  textContainer: {
    width: wp(90),
    paddingTop: 50,
  },
  subTextStyle: {
    fontWeight: '800',
  },
  descriptionText: {
    marginTop: 20,
  },
  mapContainer: {
    marginTop: 33,
  },
  mapStyle: {
    width: wp(90),
    height: 300,
  },
  searchBox: {
    marginTop: 35,
    backgroundColor: Colors.softGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDetailText: {
    paddingLeft: 12,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    width: wp(88),
    marginTop: 50,
  },
  mapModalStyle: {
    width: wp(100),
    height: 700,
  },
  modalSearchBox: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: wp(90),
    height: 50,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: 250,
  },
  searchInput: {
    width: 200,
    height: 50,
    paddingLeft: 10,
    backgroundColor: Colors.softGray,
  },
  locationDetailContainer: {
    backgroundColor: Colors.white,
    width: wp(90),
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    position: 'absolute',
    bottom: 100,
    left: 24,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    gap: 15,
  },
  locationIconBox: {
    backgroundColor: Colors.softGray,
    padding: 15,
    borderRadius: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    width: 232,
    flexWrap: 'wrap',
  },
  chooseLocationButton: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 24,
    width: 278,
    left: 50,
    marginHorizontal: 'auto',
  },
});
