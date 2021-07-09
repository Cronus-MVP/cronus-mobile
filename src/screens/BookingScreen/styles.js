import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffba3b'
  },
  text: {
    fontFamily: 'sans-serif-thin',
    color: '#101010',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: 'center',
  },
  subText: {
    fontFamily: 'sans-serif-thin',
    color: '#101010',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffba3b',
    color: '#ffba3b',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20 
},
cancelButton: {
    backgroundColor: '#3d3b36',
    color: '#3d3b36',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20 
},
buttonText: {
    backgroundColor: '#ffba3b',
    color: '#000000',
    },
cancelButtonText: {
    backgroundColor: '#3d3b36',
    color: '#ffffff',
    }
})