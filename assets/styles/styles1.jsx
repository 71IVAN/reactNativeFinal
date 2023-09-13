import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', 
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white', 
    marginBottom: 12,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: '#FF9B9B',
    marginBottom: 10,
  },
  exitoText: {
    color: '#7FE67F',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  buttonContent: {
    paddingHorizontal: 10,
  },
  button: {
    color: '#E68D8D',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#E68D8D',
  },
  calificacionItem: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  calificacionEncontrada: {
    marginTop: 20,
    backgroundColor: '#E6F7FF',
    padding: 10,
    borderRadius: 5,
  },
});

const myimage = StyleSheet.create({
  images: {
    width: '100%',
    height: '100%',
  },
});

export { styles, myimage };