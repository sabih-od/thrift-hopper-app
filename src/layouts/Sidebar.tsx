import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Sidebar = ({ onClose, navigation }: any) => {
  const route = useRoute();
  const [selectedButton, setSelectedButton] = useState('dark');
  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };
  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={onClose}>
        <Icon name="close-circle-outline" style={styles.closeIcon} size={24} />
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/images/profile/profile.jpeg')}
          style={styles.profileImage}
        />
        <View style={styles.loginInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.tab, route.name === 'Home' ? styles.activeTab : '']} onPress={() => navigation.navigate('Home')}>
        <Icon name="home-outline" style={[styles.tabIcon, route.name === 'Home' ? styles.activeIcon : '']} size={20} />
        <Text style={[styles.tabText, route.name === 'Home' ? styles.activeText : '']}>Homepage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, route.name === 'login' ? styles.activeTab : '']} onPress={() => navigation.navigate('Login')}>
        <Icon name="search-outline" style={[styles.tabIcon, route.name === 'login' ? styles.activeIcon : '']} size={20} />
        <Text style={styles.tabText}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="bag-outline" style={styles.tabIcon} size={20} />
        <Text style={styles.tabText}>MyOrder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="git-branch-outline" style={styles.tabIcon} size={20} />
        <Text style={styles.tabText}>Brand</Text>
      </TouchableOpacity>
      <Text style={styles.otherHeading}>OTHER</Text>
      <TouchableOpacity style={styles.tab}>
        <Icon name="settings-outline" style={styles.tabIcon} size={20} />
        <Text style={styles.tabText}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="mail-outline" style={styles.tabIcon} size={20} />
        <Text style={styles.tabText}>Sopport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="information-circle-outline" style={styles.tabIcon} size={20} />
        <Text style={styles.tabText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutTab}>
        <Icon name="log-out" style={styles.logoutTabIcon} size={20} />
        <Text style={styles.tabText}>LOG OUT</Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'dark' && styles.selectedButton]}
          onPress={() => handleButtonPress('dark')}
        >
          <Icon name="moon-outline" style={styles.buttonIcon} size={20} />
          <Text style={[styles.buttonText, selectedButton === 'dark' && styles.selectedButtonText]}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedButton === 'light' && styles.selectedButton]}
          onPress={() => handleButtonPress('light')}
        >
          <Icon name="sunny-outline" style={styles.buttonIcon} size={20} />
          <Text style={[styles.buttonText, selectedButton === 'light' && styles.selectedButtonText]}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    borderRadius: 20,
    padding: 10,
  },
  closeIcon: {
    fontSize: 24,
    color: "#333",
    textAlign: "right",
    marginBottom: 10,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  tabIcon: {
    padding: 15,
    marginRight: 10,
    color: "#777E90",
  },
  tabText: {
    fontSize: 16,
    color: "#777E90",
    lineHeight: 22,
    fontWeight: '700'
  },
  logoutTab: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#000000',
    borderRadius: 20,
    marginBottom: 10,
  },
  logoutTabIcon: {
    padding: 20,
    marginRight: 10,
    color: "#fff",
  },
  otherHeading: {
    marginTop: 30,
    marginBottom: 30,
  },
  profileSection: {
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#000000'
  },
  profileEmail: {
    fontSize: 13,
    color: "#000000",
  },
  loginInfo: {
    gap: 4,
    marginLeft: 20
  },
  buttonGroup: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#eee',
  },
  selectedButton: {
    backgroundColor: '#333',
  },
  buttonIcon: {
    marginRight: 5,
    color: '#555',
  },
  buttonText: {
    fontSize: 16,
    color: '#555',
  },
  selectedButtonText: {
    color: '#fff',
  },
  activeTab: {
    backgroundColor: '#CB6F13',
  },
  activeText: {
    color: '#fff',
  }, activeIcon: {
    color: '#fff',

  }
});

export default Sidebar;
