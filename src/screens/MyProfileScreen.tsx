import React, {useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageSourcePropType,
    ScrollView,
    Text,
    useWindowDimensions,
    View
} from 'react-native';
import MapScreen from '../components/MapScreen.tsx';
import ChartComponent from '../components/ChartComponent.tsx';
import Button from "../components/Button.tsx";
import Avatar from "../components/Avatar.tsx";
import RestaurantCard from "../components/RestaurantCard.tsx";
import Rating from "../components/Rating.tsx";
import {listItems, menuListItems, ProfileHeader, recentActivity, RestaurantBody, theme} from "../theme/theme.ts";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const heartIcon = require('../assets/icons/heart.png');

const restaurantData = [
    { id: '1', name: "Cobi’s", image: require('../assets/images/topImage1.png'), rating: "9.5" },
    { id: '2', name: "Don Angie", image: require('../assets/images/topImage2.png'), rating: "9.2" },
    { id: '3', name: "Sushi by S...", image: require('../assets/images/topImage3.png'), rating: "9.1" },
    { id: '4', name: "Honor Bar", image: require('../assets/images/topImage4.png'), rating: "9.1" },
    { id: '5', name: "Easy Street", image: require('../assets/images/topImage5.png'), rating: "9.1" },
    { id: '6', name: "Osteria M...", image: require('../assets/images/topImage6.png'), rating: "8.8" },
    { id: '7', name: "Chipotle...", image: require('../assets/images/topImage7.png'), rating: "8.8" },
    { id: '8', name: "Ospi Bren...", image: require('../assets/images/topImage8.png'), rating: "8.7" },
];

interface ActivityItem {
    id: string;
    image: string | ImageSourcePropType;
    name: string;
    location: string;
    time: string;
    rating: string;
}

interface ListItem {
    id: string;
    title: string;
    description: string;
    restaurants: number;
    likes: number;
    nearby?: boolean;
    icon: any;
}

interface MenuItem {
    id: string;
    title: string;
    icon: string;
    count: number;
}

const recentActivities: ActivityItem[] = [
    {
        id: '1',
        image: require('../assets/images/recentActivityImage1.png'), // Replace with actual image URL
        name: 'Anajak Thai Cuisine',
        location: 'Sherman Oaks, CA',
        time: '1d',
        rating: '9.2',
    },
    {
        id: '2',
        image: require('../assets/images/recentActivityImage2.png'),
        name: 'Night + Market Weho',
        location: 'West Hollywood, CA',
        time: '4d',
        rating: '7.2',
    },
    {
        id: '3',
        image: require('../assets/images/recentActivityImage3.png'),
        name: 'Thai Boom',
        location: 'West Hollywood, CA',
        time: '1w',
        rating: '5.2',
    },
];

const DATA: ListItem[] = [
    {
        id: "1",
        title: "best thai in LA",
        description: "Exactly what it says dummy!",
        restaurants: 3,
        likes: 0,
        nearby: true,
        icon: require("../assets/images/thai.png"),
    },
    {
        id: "2",
        title: "tendies",
        description: "You already know i love me some basement chicken tendies",
        restaurants: 5,
        likes: 12,
        icon: require("../assets/images/tendies.png"),
    },
    {
        id: "3",
        title: "Favorite date spots",
        description: "If we make it to one of these spots, we are vibin hard",
        restaurants: 3,
        likes: 27,
        icon: require("../assets/images/hearts.png"),
    },
];

const MENUDATA: MenuItem[] = [
    {
        id: "1",
        title: "Following",
        icon: require("../assets/icons/usercercle.png"),
        count: 3,
    },
    {
        id: "2",
        title: "Hitlist",
        icon: require("../assets/icons/bookmark.png"),
        count: 3,
    },
];



const ProfileScreen = () => {
    const [section, setSection] = useState('profileHeader');
    const { height } = Dimensions.get('window');
    const insets = useSafeAreaInsets(); // Get safe area padding
    const TAB_BAR_HEIGHT = 120; // Adjust based on your design
    const { width } = useWindowDimensions(); // Get screen width
    const itemSize = 100; // Approximate item width (including margin)
    const numColumns = Math.floor(width / itemSize); // Calculate number of columns

    const seeMoreHandleClick= () => {};

    const renderRecentActivityItem = ({ item }: { item: ActivityItem }) => (
        <View style={ProfileHeader.itemContainer}>
            <View style={{marginRight: 15}}>
                <Avatar uri={item.image} showHeart={false} locationName={'recentActivity'} />
            </View>
            <View style={theme.infoContainer}>
                <Text style={recentActivity.name}>{item.name}</Text>
                <Text style={recentActivity.details}>{item.location} • {item.time}</Text>
            </View>
            <View style={recentActivity.ratingContainer}>
                <Rating rating={item.rating} />
            </View>
            <Image style={{ width:15, height:15 }} source={require('../assets/icons/chevron-forward-white.png')} />
        </View>
    );

    const ListItemComponent = ({ item }: { item: ListItem }) => (
        <View style={listItems.listItem}>
            <View style={listItems.iconArea}>
                <Avatar uri={item.icon} locationName={'listMore'} showHeart={false} />
            </View>
            <View style={listItems.textContainer}>
                <Text style={listItems.title}>{item.title}</Text>
                <Text style={listItems.description}>{item.description}</Text>
                <View style={listItems.footer}>
                    <Text style={listItems.footerText}>{item.restaurants} restaurants</Text>
                    {item.nearby && <Text style={listItems.nearby}> 1 nearby!</Text>}
                    <Text style={listItems.footerText}> • {item.likes ? `${item.likes} likes` : "No likes yet"}</Text>
                </View>
            </View>
            <Image style={{ width:15, height:15 }} source={require('../assets/icons/chevron-forward-white.png')} />
        </View>
    );

    const MenuItemComponent = ({ item }: { item: MenuItem }) => (
        <View style={menuListItems.menuListItem}>
            <View style={menuListItems.menuIconArea}>
                <Avatar uri={item.icon} locationName={'listMore'} showHeart={false} />
            </View>
            <Text style={menuListItems.menuTitle}>{item.title}</Text>
            <Text style={menuListItems.menuCount}>{item.count}</Text>
            <Image style={{ width:15, height:15 }} source={require('../assets/icons/chevron-forward-white.png')} />
        </View>
    );

    return (
        <ScrollView
            style={{backgroundColor: theme.colors.background}}
            contentContainerStyle={{
                paddingBottom: TAB_BAR_HEIGHT + insets.bottom, // Prevents content from hiding behind the bottom tab
            }}
            showsVerticalScrollIndicator={false}>
            <View style={[theme.container, { minHeight: height - insets.top, backgroundColor: theme.colors.background }]}>
                <View style={theme.section}>
                    <MapScreen />
                </View>
                {/*<BlurView style={theme.blurOverlay} blurType="light" blurAmount={10} />*/}

                <View style={[theme.container, { backgroundColor: theme.colors.background, padding: 20 }]}>
                    <View style={theme.header}>
                        <View style={{flex: 2}}>
                            <Text style={ProfileHeader.usernameHandle}>kumargauravof
                                <Image source={require('../assets/icons/no-entry.png')} style={ProfileHeader.badge} />
                            </Text>
                            <Text style={ProfileHeader.username}>Kumar Gaurav</Text>
                            <Text style={ProfileHeader.location}>Los Angeles, CA</Text>
                        </View>
                        <View style={{flex: 0.5}}>
                            <Avatar uri={require('../assets/images/profile.png')} showHeart={false} locationName={'profile'} />
                        </View>
                    </View>

                    <View style={theme.followButton}>
                        <Button
                            title="Follow"
                            onPress={() => setSection("profileHeader")}
                            imageSource={section === "profileHeader" ? heartIcon : undefined}
                        />
                    </View>
                </View>

                <View style={[theme.container, { backgroundColor: theme.colors.background }]}>
                    <Text style={RestaurantBody.restaurantTitle}>Gaurav’s Top 8</Text>
                    <FlatList
                        data={restaurantData}
                        renderItem={({ item }) => <RestaurantCard item={item} />}
                        keyExtractor={(item) => item.id}
                        numColumns={numColumns}
                        nestedScrollEnabled={true}
                        contentContainerStyle={theme.list}
                    />
                </View>
                <View style={[theme.container, { backgroundColor: theme.colors.background }]}>
                    <Text style={recentActivity.recentActivityHeader}>Recent Activity</Text>
                    <FlatList
                        data={recentActivities}
                        keyExtractor={(item) => item.id}
                        renderItem={renderRecentActivityItem}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={theme.list}
                    />
                    <View style={theme.infoContainer}>
                        <Button title={'See More'} onPress={seeMoreHandleClick} />
                    </View>
                </View>
                <ChartComponent />
                <View style={[theme.container, { backgroundColor: theme.colors.background }]}>
                    <Text style={theme.ListItemHeader}>Lists</Text>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ListItemComponent item={item} />}
                        keyExtractor={(item) => item.id}
                        nestedScrollEnabled={true}
                        contentContainerStyle={theme.list}
                    />
                    <View style={theme.infoContainer}>
                        <Button title={'See More'} onPress={seeMoreHandleClick} />
                    </View>
                </View>
                <View style={[theme.container, { backgroundColor: theme.colors.background }]}>
                    <FlatList
                        data={MENUDATA}
                        renderItem={({ item }) => <MenuItemComponent item={item} />}
                        keyExtractor={(item) => item.id}
                        nestedScrollEnabled={true}
                        contentContainerStyle={theme.list}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
