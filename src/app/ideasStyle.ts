import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        padding: 15,
        paddingTop: 30,
        backgroundColor: '#151515',
    },

    headerContainer: {
        width: "100%",
        marginBottom: "auto"
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 80,
        height: 80,
    },

    searchContainer: {
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

    backButton: {
        marginStart: 20,
        marginTop: 30,
    },

    backButtonText: {
        color: '#ec701c',
    },

    contentBox: {
        marginBottom: "auto",
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#f8f8f8ff',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 15,
        color: '#555',
    },
    areaSelector: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    areaButton: {
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
    },
    pickerContainer: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#ec701c",
        marginBottom: 20,
        overflow: 'hidden', // Importante para bordas arredondadas no Picker
    },
    picker: {
        padding: 10,
        width: '100%',
        color: '#f8f8f8ff',
    },
    selectedAreaButton: {
        backgroundColor: '#0505d8ff',
    },
    areaButtonText: {
        color: '#333',
    },
    selectedAreaButtonText: {
        color: '#ffffff',
    },
    ideaContainer: {
        padding: 15,
        backgroundColor: '#222222',
        borderRadius: 8,
        marginBottom: 20,
    },
    ideaText: {
        fontSize: 18,
        lineHeight: 28,
        color: "#ffffff",
    },
    highlight: {
        color: '#ec701c',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 20,
    },
    flavourText: {
        fontSize: 20,
        color: '#6200ee',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    generateButton: {
        backgroundColor: '#0020eeff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    generateButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default style;