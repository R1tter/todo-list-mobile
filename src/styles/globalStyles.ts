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
    padding: 15, // Aumento do padding para um botão maior
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#2E2E2E',
    fontSize: 18, // Aumento do tamanho da fonte
    fontWeight: 'bold', // Fonte em negrito
  },
  checkbox: {
    borderColor: '#FFD700',
  },
  text: {
    color: '#F5F5F5', // Cor off-white para o texto comum
    fontSize: 16, // Tamanho da fonte padrão maior
    fontWeight: 'bold', // Fonte em negrito
  },
  heading: {
    fontSize: 24, // Tamanho da fonte do cabeçalho maior
    fontWeight: 'bold', // Fonte em negrito
    color: '#F5F5F5', // Cor off-white para o cabeçalho
  },
});

export default styles;
