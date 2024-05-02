import { Image, StyleSheet, Text, View } from "react-native"

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/2c529ad2cc52815b187ab725d465f110.png')} style={styles.logo} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        height: 300,
        width: 400,
    }
});

export default Splash