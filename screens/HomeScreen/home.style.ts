import { StyleSheet } from "react-native"
import { colors } from "../../constants/theme"

const styles = () =>
    StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["light"].PURPLE,
        paddingHorizontal: 10,
    },
    topIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,

    },
    topContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingTop: 10,
    },

    headerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors["light"].PINK,
    },

    homeCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors["light"].PINK,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    curve1: {
        width: 80,
        height: 40,
        borderWidth: 3, 
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
        borderRightWidth: 0,
        
    },
    curve2: {
        width: 80,
        height: 40,
        borderWidth: 3, 
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderLeftWidth: 0,
    },
    homeTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 30,
    },
    homeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors["light"].PINK,
    },

    /**LIST */
    homeItemsContainer: {
        // marginTop: 20,
        // borderWidth: 1, 
    },

    contentContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 10,
      },

    bottomPinkBox: {
        height: 40,
        width: '100%',
        borderRadius: 25,
        backgroundColor: colors["light"].PINK,
    },
    dots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors["light"].BLUE,
        shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
    }
})

export default styles