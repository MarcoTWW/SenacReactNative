import { Background, Button } from '@react-navigation/elements';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const style = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent: 'flex-start',
        padding: 15,
        paddingTop: 30,
        backgroundColor: '#151515',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "auto",
    },

    headerContainer: {
        width: "100%",
    },

    logo: {
        width: 80,
        height: 80,
    },

    searchContainer: {
        height: 40,
        width: 315,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 6,
    },

    searchInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
    },

    searchButton: {
        paddingTop: 2,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        gap: 15,
    },

    button: {
        width: 95,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffffff',
        fontSize: 11,
        fontWeight: '500'
    },

    box: {
        backgroundColor: '#222222',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },

    User: {
        width: 100,
    },

    textUser: {
        color: 'white',
        fontWeight: '500'
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#006AB9',
        marginBottom: 10,
    },

    texto: {
        fontSize: 13,
        color: '#ffffff',
        marginBottom: 10,
    },

    userTagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    tag: {
        backgroundColor: '#ec701c',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },

    tagText: {
        color: '#FFFF',
        fontSize: 11,
        fontWeight: '500'
    },

    button2: {
        height: 40,
        width: "100%",
        marginStart: 'auto',
        marginEnd: 'auto',
        marginBottom: 10,
        justifyContent: 'center',
        color: '#ffffff',
        backgroundColor: '#484848',
        borderRadius: 20,
        alignItems: 'center',
    },

    buttonText1: {
        height: 30,
        paddingTop: 5,
        marginStart: 'auto',
        marginEnd: 'auto',
        textAlign: 'center',
        fontWeight: '500',
        justifyContent: 'center',
        color: '#f78b1fbb',
        borderRadius: 20,
        alignItems: 'center',
    }

});
export default style;
