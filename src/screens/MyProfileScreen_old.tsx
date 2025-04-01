import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const userData = {
    name: 'Kumar Gaurav',
    location: 'Los Angeles, CA',
    profilePic: require('../assets/images/profile.png'),
    topSpots: [
        { id: '1', name: 'Coldt', icon: require('../assets/icons/Pin1.png') },
        { id: '2', name: 'Dan Angels', icon: require('../assets/icons/Pin2.png') },
        { id: '3', name: 'Sushi by...', icon: require('../assets/icons/Pin3.png') },
        { id: '4', name: 'Honor Bar', icon: require('../assets/icons/Pin4.png') },
    ],
    recentActivity: [
        { id: '1', place: 'Arijit Thai Cuisine', location: 'Sherman Oaks, CA - 1d' },
        { id: '2', place: 'Night + Market Weho', location: 'West Hollywood, CA - 4d' },
        { id: '3', place: 'The Beon', location: 'West Hollywood, CA - 1w' },
    ],
    lists: [
        { id: '1', title: 'Best Thai in LA', comments: 'Exactly what it sounds like', likes: 3 },
        { id: '2', title: 'Trendee', comments: 'A few hidden gems in some buzziest dining rooms', likes: 5 },
        { id: '3', title: 'Favorite date spots', comments: 'A few reliable one of these spots, we do Vietnamese', likes: 2 },
    ],
};

const MyProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Map Section */}
            <View style={styles.mapContainer}>
                <Image source={require('../assets/images/map.png')} style={styles.mapImage} />
            </View>

            {/* Profile Header */}
            <View style={styles.profileHeader}>
                <Image source={userData.profilePic} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.location}>{userData.location}</Text>
                </View>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>+ Follow</Text>
                </TouchableOpacity>
            </View>

            {/* Top Spots Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Gaurav’s Top</Text>
                <FlatList
                    data={userData.topSpots}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.spotItem}>
                            <Image source={item.icon} style={styles.spotImage} />
                            <Text style={styles.spotText}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Recent Activity Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Activity</Text>
                {userData.recentActivity.map((activity) => (
                    <View key={activity.id} style={styles.activityItem}>
                        <Text style={styles.activityPlace}>{activity.place}</Text>
                        <Text style={styles.activityLocation}>{activity.location}</Text>
                    </View>
                ))}
                <TouchableOpacity style={styles.seeMoreButton}>
                    <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
            </View>

            {/* Lists Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Lists</Text>
                {userData.lists.map((list) => (
                    <View key={list.id} style={styles.listItem}>
                        <Text style={styles.listTitle}>{list.title}</Text>
                        <Text style={styles.listComments}>{list.comments}</Text>
                    </View>
                ))}
                <TouchableOpacity style={styles.seeMoreButton}>
                    <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
            </View>

            {/* Following & Hitlist */}
            <View style={styles.bottomMenu}>
                <TouchableOpacity>
                    <Text style={styles.bottomMenuText}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottomMenuText}>Hitlist</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#121212', flex: 1 },
    mapContainer: { height: 200, backgroundColor: '#333' },
    mapImage: { width: '100%', height: '100%' },
    profileHeader: { flexDirection: 'row', alignItems: 'center', padding: 16 },
    profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
    userInfo: { flex: 1 },
    name: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
    location: { fontSize: 14, color: '#aaa' },
    followButton: { backgroundColor: '#ff5a5f', padding: 8, borderRadius: 8 },
    followText: { color: '#fff', fontWeight: 'bold' },
    section: { padding: 16 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    spotItem: { alignItems: 'center', marginRight: 10 },
    spotImage: { width: 50, height: 50, borderRadius: 25 },
    spotText: { fontSize: 12, color: '#fff', marginTop: 5 },
    activityItem: { paddingVertical: 8 },
    activityPlace: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
    activityLocation: { fontSize: 12, color: '#aaa' },
    seeMoreButton: { paddingVertical: 8, alignItems: 'center' },
    seeMoreText: { color: '#ff5a5f', fontWeight: 'bold' },
    listItem: { paddingVertical: 8 },
    listTitle: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
    listComments: { fontSize: 12, color: '#aaa' },
    bottomMenu: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
    bottomMenuText: { fontSize: 14, color: '#ff5a5f' },
});

export default MyProfileScreen;
