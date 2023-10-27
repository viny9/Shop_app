import { useState } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native"

const Login = props => {
    const [, setEmail] = useState('')
    const [, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/login_canto_direito_em_cima.png")}
                style={styles.iconImgTop} />

            <Image
                source={require("../assets/logo_login.png")}
                style={styles.img} />

            <Image
                source={require("../assets/login_canto_esquerdo_em_baixo.png")}
                style={styles.iconImgBottom} />

            < TextInput
                style={styles.input}
                placeholder="teste@gmail.com"
                onChangeText={e => setEmail({ email: e })}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={e => setPassword({ password: e, })}
            />

            <TouchableOpacity
                onPress={e => props.navigation.navigate('Profile')}
                style={styles.button}>

                <Text >Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPasswordLink}>Esqueceu a senha</Text>
            <Text style={styles.signInLink}>Cadastre-se</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },

    iconImgTop: {
        width: 406,
        height: 402,
        top: -230,
        right: -240,
        position: "absolute",
    },

    iconImgBottom: {
        width: 406,
        height: 402,
        top: 470,
        left: -190,
        position: "absolute",
    },

    img: {
        width: "50%",
        height: 200,
        marginTop: 30,
        marginBottom: 20
    },

    input: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 5,
        width: "85%",
        marginBottom: 20,
        borderRadius: 30,
        textAlign: "center"
    },

    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#64CFCA",
        marginTop: 15,
        height: 36,
        width: "65%",
        borderRadius: 30
    },

    buttonText: {
        fontSize: 17,
        color: "#000"
    },

    forgotPasswordLink: {
        textDecorationColor: "#000",
        textDecorationLine: "underline",
        fontWeight: "900",
        marginTop: 10
    },

    signInLink: {
        color: "#000",
        width: "85%",
        textAlign: "right",
        textDecorationColor: "#000",
        textDecorationLine: "underline",
        marginTop: 15,
    }
})

export default Login