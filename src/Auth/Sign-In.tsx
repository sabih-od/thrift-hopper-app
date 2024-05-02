import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const SignIn = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Create Your Account</Text>

            <TextInput placeholder="Name" style={styles.inputEmail} />
            <TextInput placeholder="Email Address" style={styles.inputEmail} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputEmail} />
            <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.inputEmail} />

            <View style={styles.btnView}>
                <Pressable style={[styles.loginBtn, styles.btnColor]} onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.loginBtnText, styles.loginUpBtnColor]}>SIGN UP</Text>
                </Pressable>
                <Text style={styles.textHeading}>Or Sign up with</Text>


            </View>
            <View style={styles.iconContainer}>


                <Icon name="logo-apple" size={40} color="black" />
                <Icon name="logo-google" size={40} color="red" />
                <Icon name="logo-facebook" size={40} color="blue" />
            </View>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textHeading}>Already have an Account? <Text style={styles.signUpText}>LOG IN</Text></Text>
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
        marginTop: 20,
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
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
export default SignIn