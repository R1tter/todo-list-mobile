import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15, 
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#2E2E2E',
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
  },
});

export default styles;
