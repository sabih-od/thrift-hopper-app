import { Image, StyleSheet, Text, View } from "react-native"

const Category = () => {
    return (
        <View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryHeading}>Our Category</Text>
                <Text style={styles.categoryHeading1}>Show all</Text>
            </View>
            <View style={styles.category}>
                <View style={styles.categoryProduct}>
                    <Image source={require('../../assets/images/categories/1.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Outerwear</Text>
                </View>
                <View style={styles.categoryProduct}>
                    <Image source={require('../../assets/images/categories/6.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Outerwear</Text>
                </View>
                <View style={styles.categoryProduct}>
                    <Image source={require('../../assets/images/categories/7.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Outerwear</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryHeading: {
        fontSize: 20,
        color: '#000000',
        lineHeight: 24,
        fontWeight: '500'
    }
    , categoryHeading1: {
        fontSize: 13,
        color: '#9B9B9B',
        letterSpacing: 1,
        lineHeight: 20,
        fontWeight: '500'
    },
    categoryImage: {
        height: 84,
        width: 84,
        borderRadius: 42,
        resizeMode: 'cover'
    },
    categoryText: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 11,
        textAlign: 'center'
    },
    category: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryProduct: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
}) 
export default Category