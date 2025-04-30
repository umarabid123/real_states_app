import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, View } from 'react-native'
import AppButton from '../../components/AppButton/AppButton'
import AppText from '../../components/AppText/AppText'
import Header from '../../components/Header/Header'
import { wp } from '../../contexts/constant'
import { Colors } from '../../contexts/theme'
import { globalStyle } from '../../styles/globalStyle'

const AccountPreferable = () => {

  const [selectedIds, setSelectedIds]: any = useState([]);

  const handleSelect = (id: any) => {
    if (selectedIds.includes(id)) {
      // Remove if already selected
      setSelectedIds(selectedIds.filter((selectedId: any) => selectedId !== id));
    } else {
      // Add to selection
      setSelectedIds([...selectedIds, id]);
    }
  };
  const imageGrid = [{
    id: 1,
    image: require('../../assets/images/gallery-img.png'),
    text: 'House',
  },
  {
    id: 2,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Apartment',
  },
  {
    id: 3,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Land',
  },
  {
    id: 4,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Office',
  },
  {
    id: 5,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Warehouse',
  },
  {
    id: 36,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Land',
  },
  {
    id: 7,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Office',
  },
  {
    id: 8,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Warehouse',
  },
  {
    id: 9,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Land',
  },
  {
    id: 10,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Office',
  },
  {
    id: 11,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Warehouse',
  }, {
    id: 12,
    image: require('../../assets/images/gallery-img.png'),
    text: 'Warehouse',
  },]

  const numColumn = 3;
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth / numColumn;
  return (
    <View style={[globalStyle.container, { justifyContent: 'flex-start', paddingTop: 24, paddingHorizontal: 0 }]}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Header type='button' />
      <View style={{ width: wp(90), paddingTop: 50, paddingBottom: 24 }}>
        <AppText text={'Select your preferable'} style={{ lineHeight: 40, paddingBottom: 20 }} fontSize={25} fontWeight={500} type='subText' subText={"\nreal estate type"} color={'#252B5C'} subTextStyle={{ fontWeight: 800, color: '#234F68' }} />
        <AppText text={'You can edit this later on your account setting.'} fontSize={12} color={Colors.mediumGray} />
      </View>

      {/* image grid */}
      <AppButton text='Show more' route='Payment' containerStyle={{ backgroundColor: Colors.primary, position: 'absolute', bottom: 20, zIndex: 50, width: 278 }} />
      <FlatList
        data={imageGrid}
        renderItem={({ item }) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <Pressable style={{ alignItems: 'center', }} onPress={() => handleSelect(item.id)}>
              <Image
                source={item.image}
                style={{ width: imageWidth, height: imageWidth, margin: 2, borderWidth: isSelected ? 1 : 0 }}
              />
            </Pressable>
          )
        }}
        numColumns={numColumn}
      />
    </View>
  )
}

export default AccountPreferable

const styles = StyleSheet.create({})