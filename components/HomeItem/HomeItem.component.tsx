import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styling from './homeItem.style'
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { HomeItemProps } from './types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/theme';


const HomeItem = (props: HomeItemProps) => {

  const { topText, bottomText, topIcon, bottomIcon } = props

  const styles = styling()

  return (
    <LinearGradient 
    colors={[
      colors["light"].PINK, colors["light"].PINK, colors["light"].LIGHT, colors["light"].BLUE_700, colors["light"].BLUE_700, colors["light"].BLUE_700]} style={styles.container}>
      <View  style={styles.topPart}>
      <FontAwesome6 name="user-large" size={40} color={colors["light"].BLUE_700} />
      </View>
      
      <View style={styles.bottomPart}>
        <View style={styles.bottomTopPart}>
            <Text style={styles.bottomTopPartText}>
                {topText || 'Home'}
            </Text>
        </View>

        <View style={styles.bottomBottomPart}>
            <View style={styles.bottomIcon}>
              {topIcon || <Entypo name="open-book" size={30} color="black" />}
            </View>
            <Text style={styles.bottomTopPartText}>
                {bottomText || 'Library'}
            </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default HomeItem
