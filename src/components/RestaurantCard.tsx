import { Text, View} from "react-native";
import Rating from "./Rating.tsx";
import React from "react";
import {RestaurantBody} from "../theme/theme.ts";
import Avatar from "./Avatar.tsx";

interface Restaurant {
    id: string;
    name: string;
    image: any;
    rating: string;
}

const RestaurantCard: React.FC<{ item: Restaurant }> = ({ item }) => {
    return (
        <View style={RestaurantBody.card}>
            {/* Restaurant Image */}
            <Avatar showHeart={false} locationName={'restaurantCard'} uri={item.image} />

            {/* Rating Badge */}
            <View style={RestaurantBody.ratingPosition}>
                <Rating rating={item.rating} />
            </View>


            {/* Restaurant Name */}
            <Text style={RestaurantBody.name} numberOfLines={1}>
                {item.name}
            </Text>
        </View>
    );
};

export default RestaurantCard;
