type IPAGE = Record<string, {title: string; screen: string}>;

const PAGE: IPAGE = {
    HOME: {
        title: 'Home',
        screen: 'HomeScreen',
    },
    EXPLORE: {
        title: 'Explore',
        screen: 'ExploreScreen',
    },
    PROFILE: {
        title: 'Profile',
        screen: 'ProfileScreen',
    },
}

export default PAGE;