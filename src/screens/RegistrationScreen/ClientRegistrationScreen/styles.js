import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#fab907'
    },
    title: {
        paddingBottom: 50,
        paddingTop: 50,
    },
    logo: {
        flex: 1,
        height: 20,
        width: 220,
        alignSelf: "center",
        resizeMode: 'contain',
        paddingTop: 50,
        paddingBottom: 50,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#ffba3b',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonNext: {
        backgroundColor: '#3d3b36',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonTitleNext: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#ffba3b",
        fontWeight: "bold",
        fontSize: 16
    },
    text: {
        color: '#101010',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom:40,
        textAlign: 'center',
      },
      card: {
        width: 350,
        height: 500,
        backgroundColor: '#f5f3eb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      }

})