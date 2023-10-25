import { useState } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"


export default Login = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const name = e.target && e.target.name;

        setFormValues({ [name]: e });
    }

    const teste = () => {
        console.log(formValues)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="teste@gmail.com"
                onChangeText={e => setFormValues({ email: e, ...formValues })}
                value={formValues.email} />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={e => setFormValues({ password: e, ...formValues })}
                value={formValues.password} />

            <TouchableOpacity style={styles.button} onPress={teste} >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: "center"
    },

    input: {
        borderBlockColor: "#000",
        borderWidth: 1,
        padding: 7,
        width: 270,
        marginBottom: 20,
        borderRadius: 30,
        textAlign: "center"
    },

    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#64CFCA",
        height: 50,
        width: 210,
        borderRadius: 30
    },

    text: {
        fontSize: 20,
        color: "#000"
    }
})