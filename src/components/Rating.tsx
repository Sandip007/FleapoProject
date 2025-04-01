import React from "react";
import {StyleSheet, Text, View} from "react-native";

type RatingProps = {
    rating: string;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
    return (
        <View style={styles.badge}>
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    badge: {
        backgroundColor: "red",
        borderRadius: 25,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
    },
    ratingText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Rating;
