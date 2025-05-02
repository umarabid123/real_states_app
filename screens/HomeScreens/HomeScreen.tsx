import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../../styles/globalStyle';
import AppText from '../../components/AppText/AppText';
import {Colors} from '../../contexts/theme';
import {wp} from '../../contexts/constant';
import AppButton from '../../components/AppButton/AppButton';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CategoryHeading from '../../components/CategoryHeading/CategoryHeading';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View style={[globalStyle.container, {justifyContent: 'flex-start'}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header  */}
        <View
          style={{
            width: wp(90),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* location  */}
          <View
            style={{
              backgroundColor: Colors.white,
              padding: 20,
              borderRadius: 50,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ECEDF3',
            }}>
            <Image source={require('../../assets/images/location-pin.png')} />
            <AppText
              text={'Jakarta, Indonesia'}
              fontSize={10}
              fontWeight={500}
              color={Colors.secondary}
            />
            <Image source={require('../../assets/images/chevron-down.png')} />
          </View>

          {/* notification section  */}
          <View style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: Colors.primary,
                width: 50,
                height: 50,
              }}>
              <Image
                source={require('../../assets/images/ion_notifications-outline.png')}
              />
            </View>
            <View
              style={{
                borderWidth: 1.2,
                borderColor: '#DFDFDF',
                borderRadius: 50,
                padding: 1,
              }}>
              <Image
                source={require('../../assets/images/profile-img.jpg')}
                style={{width: 44, height: 44, borderRadius: 50}}
              />
            </View>
          </View>
        </View>

        {/* welcome section  */}
        <View style={{width: wp(90), marginTop: 35}}>
          <AppText
            text={'Hey,'}
            type="subText"
            fontSize={25}
            fontWeight={500}
            color={Colors.secondary}
            subTextStyle={{fontWeight: 800}}
            subText={"Jonathan! \nLet's start exploring"}
          />
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
        </View>

        {/* category buttons  */}
        <View style={{height: 120}}>
          <FlatList
            data={['All', 'House', 'Apartment', 'House', 'Apartment']}
            renderItem={({item, index}) => (
              <AppButton
                text={item}
                containerStyle={{
                  backgroundColor:
                    activeTab === index ? Colors.lightBlue : Colors.softGray,
                  width: 'auto',
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 17,
                  borderRadius: 26,
                }}
                textStyle={{
                  color: activeTab === index ? Colors.white : Colors.secondary,
                  fontWeight: 500,
                }}
                onPress={() => setActiveTab(index)}
              />
            )}
            horizontal
            style={{marginTop: 20, gap: 10}}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Category card section top  */}
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item}) => <CategoryCard />}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          style={{marginBottom: 26}}
        />

        {/* Feature Card section  */}
        <CategoryHeading title="Featured Estates" viewText="view all" />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item}) => <FeatureCard />}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
        />

        {/* top location  */}
        <CategoryHeading title="Top Locations" viewText="explore" />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item}) => (
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
                text={'Jakarta'}
                fontSize={10}
                color={Colors.secondary}
                fontWeight={500}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}

        />

        <CategoryHeading title="Top Estate Agent" viewText="explore" />
        <FlatList
          data={[1, 2, 3, 4, 5,6,7]}
          renderItem={({item}) => (
            <Image
              source={require('../../assets/images/bg-img.png')}
              style={{
                borderRadius: 50,
                width: 70,
                height: 70,
                borderWidth: 4,
                borderColor: Colors.softGray,
              }}
            />
          )}
          horizontal
          ItemSeparatorComponent={() =>(
            <View style={{width:10}} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
  modalSearchBox: {
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
});
