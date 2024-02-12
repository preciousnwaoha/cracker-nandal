import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

const styles = () => StyleSheet.create({
    container: {
        width: 84,
        borderRadius: 15,
        elevation: 21,
    },
   
   
    bottomTopPartText: {
        color: 'white',
        marginBottom: 10,
    },
    bottomBottomPart: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 10,
        borderTopEndRadius: 15, 
        borderTopStartRadius: 15,  
    },
    bottomIcon: {
        width: 46,
        height: 46,
        backgroundColor: colors["light"].PINK,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    bottomBottomPartSubText: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    bottomBottomPartText: {
        color: 'white',
    }
    

})

export default styles;