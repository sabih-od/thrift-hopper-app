import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Footer = () => {
    const route = useRoute();
const navigation = useNavigation()
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
            >
                <Icon name="home-outline" size={34} style={[route.name === 'Home' ? styles.ActiveIcon : styles.iconColor]} />
                <Text style={[route.name === 'Home' ? styles.iconText : '']}></Text>
            </TouchableOpacity>
            <TouchableOpacity
            >
                <Icon name="search-outline" size={34} style={styles.iconColor} />
                <Text style={[route.name === 'Search' ? styles.iconText : '']}></Text>

                {/* <Text style={styles.iconText}></Text> */}
            </TouchableOpacity>
            <TouchableOpacity
            >
                <Icon name="git-branch-outline" size={34} style={styles.iconColor} />
                <Text style={[route.name === 'Profile' ? styles.iconText : '']}></Text>

                {/* <Text style={styles.iconText}></Text> */}
            </TouchableOpacity>
            <TouchableOpacity
            >
                <Icon name="person-outline" size={34} style={styles.iconColor} />
                <Text style={[route.name === 'Brand' ? styles.iconText : '']}></Text>

                {/* <Text style={styles.iconText}></Text> */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10,
    },
    iconText: {
        backgroundColor: '#CB6F13',
        height: 2, 
        width: 35, 
        marginTop: 10,
    },
    iconColor: {
        color: 'grey'
    },
    ActiveIcon: {
        color: '#CB6F13'
    }
});

export default Footer;
