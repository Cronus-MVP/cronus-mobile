import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        paddingBottom: 8,
        paddingTop: 120,
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
    background: {
        flex: 1,
        width: '100%',
        height: '130%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 1
      },
      selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox: {
        width: 300,
        height: 300
      }

})