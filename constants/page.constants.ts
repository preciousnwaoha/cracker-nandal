type IPAGE = Record<string, {title: string; screen: string}>;

const PAGE: IPAGE = {
    HOME: {
        title: 'Home',
        screen: 'HomeScreen',
    },
    ABOUT: {
        title: 'About',
        screen: 'AboutScreen',
    },
    CONTACT: {
        title: 'Contact',
        screen: 'ContactScreen',
    },
}

export default PAGE;