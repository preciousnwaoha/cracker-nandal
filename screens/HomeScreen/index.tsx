import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styling from './home.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import HomeItem from '../../components/HomeItem';
import HomeItemSmall from '../../components/HomeItemSmall';
import { colors } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const HOME_ITEMS = [
  {
    id: "1",
    topText: "Home",
    bottomText: "Library",
    topIcon: <MaterialCommunityIcons name="home" size={30} color={colors["light"].BLUE_700} />,
    bottomIcon: <MaterialCommunityIcons name="library" size={30} color={colors["light"].BLUE_700} />
  },
  {
    id: "2",
    topText: "Search",
    bottomText: "Explore",
    topIcon: <Feather name="search" size={30} color={colors["light"].BLUE_700} />,
    bottomIcon: <MaterialCommunityIcons name="compass" size={30} color={colors["light"].BLUE_700} />
  },
  {
    id: "3",
    topText: "Profile",
    bottomText: "Account",
    topIcon: <MaterialCommunityIcons name="window-closed-variant" size={24} color="black" />,
    bottomIcon: <MaterialCommunityIcons name="account" size={30} color={colors["light"].BLUE_700} />
  },
]

const HOME_ITEMS_SMALL = [
  {
    id: "1",
    topText: "id - 1 - 01",
    subText: "Exam 1",
    icon: <MaterialCommunityIcons name="home" size={30} color={colors["light"].BLUE_700} />,
  },
  {
    id: "2",
    topText: "id - 2 - 02",
    subText: "Exam 2",
    icon: <MaterialCommunityIcons name="magnify" size={30} color={colors["light"].BLUE_700} />,
  },
  {
    id: "3",
    topText: "id - 2 - 02",
    subText: "Exam 3",
    icon: <MaterialCommunityIcons name="account" size={30} color={colors["light"].BLUE_700} />,
  },
]

const HomeScreen = () => {

    const styles = styling()    

  return (
    <LinearGradient colors={[colors["light"].BROWN, colors["light"].PURPLE_700]} style={styles.container}>
      
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
        <Text style={styles.homeText}>Home</Text>
        <Feather name="plus" size={14} color={colors["light"].PINK} />
      </View>


      <View style={{
        marginBottom: 8,
      }}>
        <FlatList
          style={styles.homeItemsContainer}
          data={HOME_ITEMS}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => <HomeItem {...item} />}
          keyExtractor={item => item.id}
          // horizontal
        
        />
      </View>

      <View>
        <FlatList
          style={styles.homeItemsContainer}
          data={HOME_ITEMS_SMALL}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => <HomeItemSmall {...item} />}
          keyExtractor={item => item.id}
          // horizontal
        
        />
      </View>
      
      <View style={{
        padding: 40,
      }}>
        <View
        style={styles.bottomPinkBox} />
      </View>

      
      
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
        padding: 20,
      }}>

        <View style={styles.dots} />

          <View>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors["light"].PINK,
            }}>Home</Text>
          </View>

          <View style={styles.dots} />
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

