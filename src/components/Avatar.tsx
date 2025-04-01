import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {RestaurantBody} from "../theme/theme.ts";

type AvatarProps = {
    uri: any;
    showHeart?: boolean;
    locationName?: string;
};

const Avatar: React.FC<AvatarProps> = ({ uri, showHeart = false, locationName = '' }) => {
    return (
        <View style={
            locationName === 'restaurantCard' ? '' : styles.container
        }>
            <Image source={uri} style={
                locationName === "recentActivity" ? styles.locationImage :
                    locationName === "listMore" ? styles.listsIcon :
                        locationName === "profile" ? styles.profileAvatar :
                            locationName === "badge" ? styles.badge :
                                locationName === "restaurantCard" ? RestaurantBody.image :
                                    styles.avatar
            } />
            {showHeart && (
                <Image source={require('../assets/icons/heart-v.png')} style={styles.heartIcon} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 50,
        height: 50,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000',
    },
    profileAvatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor: '#000', marginLeft: 0 },
    heartIcon: {
        position: 'absolute',
        top: 1,
        right: 1,
        width: 15,
        height: 15,
    },
    locationImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 12,
    },
    listsIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
        borderWidth: 2,
        borderColor: "#000",
    },
    badge: { width: 16, height: 16, marginLeft: 5 },
});

export default Avatar;
