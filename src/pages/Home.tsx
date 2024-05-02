import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Product from "./components/Product";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <View style={styles.container}>
            <Header onToggleSidebar={toggleSidebar} />
            {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
            <ScrollView>
                <View>
                    <View style={styles.midContent}>
                        <Slider />
                        <Category />
                        <Product />
                    </View>
                    <View style={styles.banner}>
                        <View
                            style={styles.bannerTextContainer}
                        >
                            <Text style={styles.collectionBannerTitle1}>| NEW COLLECTION</Text>
                            <Text style={styles.collectionBannerHeading1}>HANG OUT & PARTY</Text>
                        </View>
                        <Image source={require('../assets/images/categories/banner.png')} style={styles.bannerImage} />
                    </View>

                    <View style={styles.midContent}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryHeading}>Recommended</Text>
                            <Text style={styles.categoryHeading1}>Show all</Text>
                        </View>

                        <View style={styles.recommended}>
                            <Image source={require('../assets/images/categories/9.png')} style={styles.ProductImage} />
                            <View>
                                <Text style={styles.productText}>Thurtleneck Sweater</Text>
                                <Text style={styles.productPrice}>$39.99</Text>
                            </View>
                        </View>
                        <View style={styles.categoryContainer}>

                            <Text style={styles.categoryHeading}>Top Collection</Text>
                            <Text style={styles.categoryHeading1}>Show all</Text>
                        </View>
                        <View style={styles.TopCollectionbanner}>
                            <View style={styles.bannerTextContainer}>
                                <Text style={styles.collectionBannerTitle2}>| Sale up to 40%</Text>
                                <Text style={styles.collectionBannerHeading2}>FOR SLIM & BEAUTY</Text>
                            </View>
                            <Image source={require('../assets/images/categories/ban3.png')} style={styles.collectionBannerImage} />
                        </View>
                        <View style={styles.TopCollectionbanner1}>
                            <View style={styles.bannerTextContainer}>
                                <Text style={styles.collectionBannerTitle3}>| Summer Collection 2021</Text>
                                <Text style={styles.collectionBannerHeading3}>Most sexy & fabulous design</Text>
                            </View>
                            <View >
                                <Image source={require('../assets/images/categories/ban2.png')} style={styles.collectionBannerImage2} />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    midContent: {
        marginLeft: 50,
        marginRight: 50,
    },
    banner: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#F8F8FA',
        height: 157,
        paddingHorizontal: 20,
    },
    bannerHeading: {
        fontSize: 25,
        fontWeight: '400',
        lineHeight: 29,
        color: '#353945',
        marginTop: 10,

    },
    bannerTitle: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: '#777E90',
        flexWrap: 'wrap',
    },
    bannerImage: {
        width: 119,
        height: 158,
        resizeMode: 'cover',

    },
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
    recommended: {
        marginTop: 20,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        width: 203,
        height: 66,
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
    ProductImage: {
        width: 66,
        height: 66,
        resizeMode: 'center'
    },
    TopCollectionbanner: {
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#F8F8FA',
        height: 141,
        paddingHorizontal: 20,
    },
    collectionBannerImage: {
        width: 152,
        height: 141,
    },
    TopCollectionbanner1: {
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#F8F8FA',
        height: 229,
        paddingHorizontal: 20,
    },
    collectionBannerTitle2: {
        paddingTop: 20,
        fontSize: 12,
        color: '#777E90',
        fontWeight: '400'
    },
    collectionBannerHeading2: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: '400',
        color: '#353945'
    },
    collectionBannerTitle3: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: '500',
        color: '#777E90',
    },
    collectionBannerHeading3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353945',
    },
    collectionBannerImage2: {
        height: 229,
        width: 152
    },
    bannerTextContainer: {
        flex: 1,
        marginRight: 20,
    },
    collectionBannerTitle1: {
        paddingTop: 20,
        fontSize: 12,
        color: '#777E90',
        fontWeight: '400'
    }, collectionBannerHeading1: {
        paddingTop: 10,
        fontSize: 25,
        lineHeight: 29,
        fontWeight: '400',
        color: '#353945'
    }
});

export default Home;
