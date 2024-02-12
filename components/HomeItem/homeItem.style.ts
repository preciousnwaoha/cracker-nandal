import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

const styles = () => StyleSheet.create({
    container: {
        width: 84,
        borderRadius: 15,
        elevation: 21,
    },
    topPart: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    bottomPart: {
        width: '100%',
    },
    bottomTopPart: {
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',    
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
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        
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
    bottomBottomPartText: {
        color: 'white',
    }
    

})

export default styles;