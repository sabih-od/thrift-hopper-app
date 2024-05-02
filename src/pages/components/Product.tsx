import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const Product = () => {
    return (
        <View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryHeading}>Feature Product</Text>
                <Text style={styles.categoryHeading1}>Show all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.product}>
                    <View style={styles.categoryProduct}>
                        <Image source={require('../../assets/images/categories/2.jpeg')} style={styles.productImage} />
                        <Text style={styles.productText}>Thurtleneck Sweater</Text>
                        <Text style={styles.productPrice}>$39.99</Text>
                    </View>
                    <View style={styles.categoryProduct}>
                        <Image source={require('../../assets/images/categories/3.png')} style={styles.productImage} />
                        <Text style={styles.productText}>Long Sleeve Dress</Text>
                        <Text style={styles.productPrice}>$45.00</Text>

                    </View>
                    <View style={styles.categoryProduct}>
                        <Image source={require('../../assets/images/categories/4.png')} style={styles.productImage} />
                        <Text style={styles.productText}>Sportwear Set</Text>
                        <Text style={styles.productPrice}>$80.00</Text>

                    </View>
                    <View style={styles.categoryProduct}>
                        <Image source={require('../../assets/images/categories/5.png')} style={styles.productImage} />
                        <Text style={styles.productText}>Sportwear Set</Text>
                        <Text style={styles.productPrice}>$80.00</Text>

                    </View>
                </View>
            </ScrollView>
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
    productImage: {
        width: 126,
        height: 172,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    productPrice: {
        fontSize: 16,
        lineHeight: 23,
        fontWeight: '700',
        color: '#1D1F22',
        textAlign: 'left',
        marginTop: 10,
    },
    productText: {
        marginTop: 10,
        fontWeight: '500',
        fontSize: 12,
        color: '#1D1F22',
        lineHeight: 14,
        textAlign: 'left'
    },
    categoryProduct: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    product: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})
export default Product