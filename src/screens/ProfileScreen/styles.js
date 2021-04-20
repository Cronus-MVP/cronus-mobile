import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height: 110,
  },
  avatar:{
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: 100,
  },
  name:{
      fontSize:22,
      fontWeight:'600',
  },
  body:{
    marginTop:90,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:110,
  },
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#ffba3b",
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
  },
})