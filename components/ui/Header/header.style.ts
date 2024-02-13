import { StyleSheet } from "react-native"
import { colors } from "../../../constants/theme"

const styles = () =>
    StyleSheet.create({
   
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
})

export default styles