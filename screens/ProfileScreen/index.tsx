import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../constants/theme'
import styling from './profile.style'
import Header from '../../components/ui/Header/header.component'
import HomeItemSmall from '../../components/HomeItemSmall'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = ({navigation}) => {

  

  const styles = styling()

  return (
    <LinearGradient colors={[colors["light"].BROWN, colors["light"].PURPLE_700]} style={styles.container}>
      <Header text={"Profile"} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen")
        }} 

        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 100,
        }}
      >
        <HomeItemSmall 
          topText={"go"}
          subText={"Home"}
          icon={<MaterialCommunityIcons name="home" size={30} color={colors["light"].BLUE_700} />}
        />
      </TouchableOpacity>

      <View style={styles.bottomWrapper}>

      <View style={styles.dots} />

        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colors["light"].PINK,
          }}>Profile</Text>
        </View>

        <View style={styles.dots} />
      </View>
    </LinearGradient>
    
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})