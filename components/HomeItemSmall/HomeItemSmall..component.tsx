import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styling from './homeItemSmall.style'
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { HomeItemSmallProps } from './types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/theme';


const HomeItemSmall = (props: HomeItemSmallProps) => {

  const { topText, subText, icon } = props

  const styles = styling()

  return (
    <LinearGradient colors={[colors["light"].LIGHT, colors["light"].BLUE_700]} style={styles.container}>
        <View style={styles.bottomBottomPart}>
            <View style={styles.bottomIcon}>
              {icon ||<Entypo name="open-book" size={30} color={colors["light"].BLUE} />}
            </View>
            <Text style={styles.bottomBottomPartSubText}>
                {topText || 'Library'}
            </Text>
            <Text style={styles.bottomTopPartText}>
                {subText || 'Library'}
            </Text>
        </View>
    </LinearGradient>
  )
}

export default HomeItemSmall
