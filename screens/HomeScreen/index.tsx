import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styling from './home.style'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import HomeItem from '../../components/HomeItem';
import HomeItemSmall from '../../components/HomeItemSmall';
import { colors } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import Header from '../../components/ui/Header/header.component';

const HOME_ITEMS = [
  {
    id: "1",
    topText: "Home",
    bottomText: "Library",
    topIcon: <MaterialCommunityIcons name="home" size={30} color={colors["light"].PINK} />,
    routeName: "HomeScreen"
  },
  {
    id: "2",
    topText: "Search",
    bottomText: "Explore",
    topIcon: <Feather name="search" size={30} color={colors["light"].BLUE_700} />,
    routeName: "ExploreScreen"

  },
  {
    id: "3",
    topText: "Profile",
    bottomText: "Account",
    topIcon: <MaterialCommunityIcons name="window-closed-variant" size={24} color="black" />,
    routeName: "ProfileScreen"
  },
]

const HOME_ITEMS_SMALL = [
  {
    id: "1",
    topText: "id - 1 - 01",
    subText: "Exam 1",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
  {
    id: "2",
    topText: "id - 2 - 02",
    subText: "Exam 2",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
  {
    id: "3",
    topText: "id - 2 - 02",
    subText: "Exam 3",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
]

const HomeScreen = () => {

    const styles = styling()    

  return (
    <LinearGradient colors={[colors["light"].BROWN, colors["light"].PURPLE_700]} style={styles.container}>
      
      <Header />


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

      
      
      <View style={styles.bottomWrapper}>

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

