import { Image, StyleSheet, View } from "react-native"

const Slider = () => {
    return (
        <View>
            <Image source={require('../../assets/images/4b7cb3b15474b1d58ae3661dd03a76db.jpeg')} style={styles.sliderImage} />
        </View>
    )
}
const styles = StyleSheet.create({
    sliderImage: {
        height: 160,
        width: 'auto',
        borderRadius: 20
    },
})
export default Slider