import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Switch } from 'react-native';
import { userInfos } from '../hooks/getUser';

const Profile = () => {

    // const [darkMode, setDarkMode] = React.useState(false);
    useEffect(() => {
        console.log(userInfos)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require('../assets/dadosPessoais.png')}
                    />
                </View>

                <Text style={styles.nome}>Nome User</Text>
                <Text style={styles.email}>compras@facil.com</Text>
                <View style={styles.divider}>
                    <Text>
                        Configurações
                    </Text>
                </View>

                <View style={styles.list}>

                    <View style={styles.listItem}>
                        <View style={styles.optionInfo}>

                            <Image
                                style={styles.listIcon}
                                source={require('../assets/modoEscuro.png')}
                            />

                            <View style={styles.teste}>
                                <Text style={styles.listText}>Modo</Text>
                                <Text>Escuro & Claro</Text>
                            </View>
                        </View>

                        <Switch />
                    </View>

                    <View style={styles.listItem}>

                        <View style={styles.optionInfo}>
                            <Image
                                style={styles.listIcon}
                                source={require('../assets/alterarSenha.png')}
                            />
                            <Text style={styles.listText}>Alterar Senha</Text>
                        </View>

                        <View >
                            <Image style={styles.rightArrowIcon} source={require('../assets/right_arrow.jpg')} />
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.optionInfo}>
                            <Image
                                style={styles.listIcon}
                                source={require('../assets/dadosPessoais.png')}
                            />
                            <Text style={styles.listText}>Dados Pessoais</Text>
                        </View>

                        <View >
                            <Image style={styles.rightArrowIcon} source={require('../assets/right_arrow.jpg')} />
                        </View>
                    </View>
                    <View style={styles.divider}>
                        <Text>Informações</Text>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.optionInfo}>

                            <Image
                                style={styles.listIcon}
                                source={require('../assets/sobreApp.png')}
                            />
                            <Text style={styles.listText}>Sobre o App</Text>
                        </View>

                        <View >
                            <Image style={styles.rightArrowIcon} source={require('../assets/right_arrow.jpg')} />
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.optionInfo}>

                            <Image
                                style={styles.listIcon}
                                source={require('../assets/termosCondicoes.png')}
                            />
                            <Text style={styles.listText}>Termos e Condições</Text>
                        </View>

                        <View >
                            <Image style={styles.rightArrowIcon} source={require('../assets/right_arrow.jpg')} />
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.optionInfo}>
                            <Image
                                style={styles.listIcon}
                                source={require('../assets/cadeado.png')}
                            />
                            <Text style={styles.listText}>Política de Privacidade</Text>
                        </View>

                        <View >
                            <Image style={styles.rightArrowIcon} source={require('../assets/right_arrow.jpg')} />
                        </View>
                    </View>
                </View>
            </View>

        </View >
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

    profileContainer: {
        marginTop: 50,
        marginBottom: 20,
        width: 150,
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "#D1D1D1"
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
        fontWeight: "bold "

    },

    email: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5,
        marginBottom: 20
    },

    divider: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 39,
        backgroundColor: "#DDDDDD",
        color: "# 909091"
    },

    optionInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    rightArrowIcon: {
        width: 15,
        height: 15,
        backgroundColor: "#000 ",
    },


    list: {
        width: '100%',
        flex: 1,
    },

    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 15
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


