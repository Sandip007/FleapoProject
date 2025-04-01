import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

type ButtonProps = {
    title: string;
    onPress: () => void;
    imageSource?: any; // Optional image prop
};

const Button: React.FC<ButtonProps> = ({ title, onPress, imageSource  }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {imageSource && <Image source={imageSource} style={styles.icon} />}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222', // Dark grey background
        borderRadius: 30,
        paddingHorizontal: 0,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: 'black', // Outer black border
        width: '100%',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
});

export default Button;
