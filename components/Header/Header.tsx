import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../contexts/theme'
import AppButton from '../AppButton/AppButton'
import { wp } from '../../contexts/constant'

const Header = ({type,headerStyle}:any) => {
    const navigation = useNavigation<any>()
  return (
    <View style={[{flexDirection:'row',alignSelf:'center', justifyContent:'space-between', width:wp(90)},headerStyle]}>
      <AppButton type='notText' source={require('../../assets/images/left-arrow.png')} containerStyle={styles.iconContainer} onPress={() => navigation.goBack() } />
      {type ==='button'&&<AppButton text='Skip' type='text' containerStyle={{backgroundColor:Colors.softGray,width:86, borderRadius:40,height:38, paddingVertical:0}} textStyle={{color:Colors.secondary, fontSize:12,fontWeight:400}} />}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({iconContainer:{
    backgroundColor:Colors.softGray,
    width:50,
    height:50,
    borderRadius:50,
}})