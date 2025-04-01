import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
    return (
        <View style={styles.searchWrapper}>
            <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search people"
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        position: "absolute",
        top: 1, // Pull it upwards into the bottom bar
        alignSelf: "center",
        width: "95%",
        height: 45,
        backgroundColor: "#2b2b2b",
        borderRadius: 22,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 8,
    },

    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    searchIcon: {
        marginRight: 8, // Space between icon and input
    },
});

export default SearchBar;
