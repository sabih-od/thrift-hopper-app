import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = ({ onToggleSidebar }: any) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onToggleSidebar}>
                <Text style={styles.hamburger}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.brandText}>Thrift Hopper</Text>
            <View style={styles.iconContainer}>
                <Icon name="notifications-outline" size={26} color="#000000" style={styles.icon} />
                <Icon name="bag-outline" size={26} color="#000000" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
    },
    brandText: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700',
        color: "#000000",
    },
    hamburger: {
        fontSize: 26,
        color: "#000000",
    }, iconContainer: {
        display: 'flex',
        flexDirection: 'row',

    },
    icon:{
        marginRight: 18, 
    }
});

export default Header;
