import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Image, Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { ImageSourcePropType } from 'react-native';

// Import Screens
import PeopleListScreen from '../screens/PeopleListScreen';
import MapScreen from '../screens/MapScreen';
import ListsScreen from '../screens/ListsScreen';
import HitlistScreen from '../screens/HitlistScreen';
import ProfileScreen from '../screens/MyProfileScreen.tsx';
import SearchBar from "../components/SearchBar.tsx";

// Import Icons
const icons: Record<string, ImageSourcePropType> = {
    Map: require('../assets/icons/map.png'),
    People: require('../assets/icons/usercercle.png'),
    Lists: require('../assets/icons/lists.png'),
    Hitlist: require('../assets/icons/hitlist.png'),
    Profile: require('../assets/images/profile.png'),
};

const Tab = createBottomTabNavigator();


const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={styles.tabContainer}>
            {/* Search Bar Positioned Inside Tab */}
            <SearchBar value={searchText} onChangeText={setSearchText} />
            {/* Tab Items */}
            <View style={styles.tabItems}>
                {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    return (
                        <TouchableOpacity
                            key={route.name}
                            onPress={() => navigation.navigate(route.name)}
                            style={styles.tabItem}>
                            <Image
                                source={icons[route.name]}
                                style={[styles.icon, isFocused && styles.iconActive]}
                            />
                            <Text style={[styles.label, isFocused && styles.labelActive]}>
                                {route.name.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

        </View>
    );
};

const BottomTabNavigator = () => {

    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Tab.Navigator
                    screenOptions={({ route }: any) => ({
                        headerShown: false,
                    })}
                    tabBar={(props) => <CustomTabBar {...props} />}
                >
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="People" component={PeopleListScreen} />
                    <Tab.Screen name="Lists" component={ListsScreen} />
                    <Tab.Screen name="Hitlist" component={HitlistScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#181818",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 20, // More space for tab items
        paddingTop: 30, // Adjust space for search bar
        elevation: 10, // Adds shadow
    },


    // 🔹 Tab Items
    tabItems: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30, // Push down below search bar
    },

    tabItem: {
        alignItems: "center",
    },

    icon: {
        width: 24,
        height: 24,
        tintColor: "gray",
    },

    iconActive: {
        tintColor: "blue",
    },

    label: {
        fontSize: 12,
        color: "gray",
    },

    labelActive: {
        color: "blue",
    },
});

export default BottomTabNavigator;
