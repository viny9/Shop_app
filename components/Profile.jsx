import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';


const Profile = () => {
    
    const [darkMode, setDarkMode] = React.useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.profileImage}
          source={require('../assets/profile.png')}
        />
        <Text style={styles.nome}>Nome User</Text>
        <Text style={styles.email}>compras@facil.com</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              style={styles.listIcon}
              source={require('../assets/alterarSenha.png')}
            />
            <Text style={styles.listText}>Alterar Senha</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listIcon}
              source={require('../assets/dadosPessoais.png')}
            />
            <Text style={styles.listText}>Dados Pessoais</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listIcon}
              source={require('../assets/sobreApp.png')}
            />
            <Text style={styles.listText}>Sobre o App</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listIcon}
              source={require('../assets/termosCondicoes.png')}
            />
            <Text style={styles.listText}>Termos e Condições</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listIcon}
              source={require('../assets/cadeado.png')}
            />
            <Text style={styles.listText}>Política de Privacidade</Text>

          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#00a000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 10,
  },
  nome: {
    fontSize: 20,

  },
  email: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
  },
  list: {
    width: '90%',
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  listIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  listText: {
    fontSize: 16,
    color: '#000000',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;


