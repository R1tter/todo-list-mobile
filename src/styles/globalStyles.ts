import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 15, 
    borderRadius: 5,
    margin: 10,
    width: '100%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
  checkbox: {
    borderColor: '#FFD700',
  },
  text: {
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#F5F5F5',
    marginBottom: 20, 
  },
  outerBox: {
    maxWidth: 400,
    width: '100%', 
    minHeight: 200,
    padding: 20, 
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },

  listTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center', // Centraliza o título "Tasks"
  },

  inputButtonContainer: {
    flexDirection: 'row', // Alinha o input e o botão horizontalmente
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20, // Espaçamento acima do container
  },
});

export default styles;
