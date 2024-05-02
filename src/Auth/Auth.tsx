import { Image, Pressable, StyleSheet, Text, View } from "react-native"


const Auth = ({navigation}:any) => {
    return (
        <View style={styles.centerView}>
            <Image source={require('../assets/images/2c529ad2cc52815b187ab725d465f110.png')} style={styles.logo} />

            <Pressable style={[styles.loginBtn, styles.btnColor]} onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.loginBtnText, styles.loginUpBtnColor]}>LOGIN</Text>
            </Pressable>

            <Pressable style={[styles.loginBtn, styles.loginBtnBorder]} onPress={() => navigation.navigate('Sign-In')}>
                <Text style={[styles.loginBtnText, styles.signUpBtnColor]}>SIGN UP</Text>
            </Pressable>

            
        </View>
    )
}
const styles = StyleSheet.create({

    centerView: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },

    logo: {
        height: 138,
        width: 184,
    },
    loginBtn: {
        marginTop: 30,
        padding: 10,
        borderRadius: 77,
        width: 300,
    },
    loginBtnText: {
        textAlign: 'center',
    },
    btnColor: {
        backgroundColor: '#CB6F13',
        color: '#fff'
    },
    loginBtnBorder: {
        borderWidth: 2,
        borderColor: '#000000',
    },
    signUpBtnColor: {
        color: 'black'
    },
    loginUpBtnColor: {
        color: '#fff'
    },
    text: {
        fontSize: 13,
        color: '#000000',
        marginTop: 20,
        lineHeight: 15.23,
        fontWeight: '500',
        fontFamily: 'Roboto'
    },
    backImage: {
        width: 541,
        height: 952,
    }
});

export default Auth
