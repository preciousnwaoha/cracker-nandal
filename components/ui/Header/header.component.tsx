import { Text, View } from 'react-native'
import React from 'react'
import styling from './header.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../constants/theme';
import { useRoute } from '@react-navigation/native';

const Header = (props: {text?: string}) => {
    const route = useRoute()

    const { text } = props
    const styles = styling()    

  return (
    <>
      
      <View style={styles.topIcon}>
        <FontAwesome6 name="canadian-maple-leaf" size={36} color={colors["light"].PINK} />
      </View>

        <View style={styles.topContainer}>
        <View style={[styles.headerItem, styles.curve1]}>
        </View>

        <View  style={[styles.headerItem, styles.homeCircle]}>
          <MaterialCommunityIcons name="bird" size={36} color="black" />
        </View>

        <View  style={[styles.headerItem, styles.curve2]}>
        </View>
      </View>

      <View style={styles.homeTextWrapper}>
      <Feather name="plus" size={14} color={colors["light"].PINK} />
        <Text style={styles.homeText}>{route.name}</Text>
        <Feather name="plus" size={14} color={colors["light"].PINK} />
      </View>
</>
  )
}

export default Header

