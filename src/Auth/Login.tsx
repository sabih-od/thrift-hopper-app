import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
const Login = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login Into Your Account</Text>

            <TextInput placeholder="Email" style={styles.inputEmail} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputEmail} />
            <Text style={styles.forgotHeading}>Forgot Password?</Text>

            <View style={styles.btnView}>
                <Pressable style={[styles.loginBtn, styles.btnColor]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.loginBtnText, styles.loginUpBtnColor]}>LOGIN</Text>
                </Pressable>
                <Text style={styles.textHeading}>Or Login With</Text>




            </View>

            <View style={styles.iconContainer}>


                <Icon name="logo-apple" size={40} color="black"/>
                <Icon name="logo-google" size={40} color="red" />
                <Icon name="logo-facebook" size={40} color="blue" />
            </View>
            <Pressable onPress={() => navigation.navigate('Sign-In')}>
                <Text style={styles.textHeading}>Don't have an Account? <Text style={styles.signUpText}>Sign up</Text></Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    btnView: {
        alignItems: 'center'
    },
    container: {
        marginLeft: 50,
        marginRight: 50
    },
    loginText: {
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 40,
        fontFamily: 'Roboto',
        color: '#000000',
        marginTop: 108
    },
    inputEmail: {
        marginTop: 50,
        height: 50,
        width: 310,
        borderBottomWidth: 0.2,
        borderBottomColor: '#000000'
    },
    forgotHeading: {
        textAlign: 'right',
        marginTop: 50,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 24,
        color: '#000000'
    },
    loginBtn: {
        textAlign: 'center',
        marginTop: 30,
        padding: 20,
        borderRadius: 77,
        width: 147,
    },
    loginBtnText: {
        textAlign: 'center',
    },
    btnColor: {
        backgroundColor: '#CB6F13',
        color: '#fff'
    },
    loginUpBtnColor: {
        color: '#fff'
    },
    textHeading: {
        marginTop: 40,
        lineHeight: 24,
        fontWeight: '500',
        fontSize: 12,
        textAlign:'center',
        letterSpacing: 2,
        color: '#000000'
    },
    signUpText: {
        color: '#CB6F13'
    }
    , iconContainer: {
        marginTop:20,
        marginLeft: 50,
        marginRight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default Login