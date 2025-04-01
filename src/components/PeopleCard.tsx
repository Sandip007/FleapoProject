import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import { peopleListScreenCard } from '../theme/theme';

type User = {
    id: string;
    name: string;
    location: string;
    avatar: any;
    heartIcon?: boolean;
    noEntryIcon?: boolean;
};

type PeopleCardProps = {
    user: User;
    onPress: () => void;
};

const PeopleCard: React.FC<PeopleCardProps> = ({ user, onPress }) => {
    return (
        <TouchableOpacity style={peopleListScreenCard.card} onPress={onPress}>
            <Avatar uri={user.avatar} showHeart={user.heartIcon} />
            <View style={peopleListScreenCard.info}>
                <View style={peopleListScreenCard.row}>
                    <Text style={peopleListScreenCard.name}>{user.name}</Text>
                    {user.noEntryIcon && (
                        <Image source={require('../assets/icons/no-entry.png')} style={peopleListScreenCard.icon} />
                    )}
                </View>
                <Text style={peopleListScreenCard.location}>{user.location}</Text>
            </View>
            <Image source={require('../assets/icons/arrow-right.png')} style={peopleListScreenCard.arrow} />
        </TouchableOpacity>
    );
};


export default PeopleCard;
