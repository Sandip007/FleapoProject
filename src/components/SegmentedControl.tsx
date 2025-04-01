import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type SegmentedControlProps = {
    options: string[];
    selectedIndex: number;
    onChange: (index: number) => void;
};

const SegmentedControl: React.FC<SegmentedControlProps> = ({
                                                               options,
                                                               selectedIndex,
                                                               onChange,
                                                           }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => {
                const isSelected = index === selectedIndex;
                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tab, isSelected && styles.selectedTab]}
                        onPress={() => onChange(index)}
                    >
                        <Text style={[styles.text, isSelected && styles.selectedText]}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222',
        borderRadius: 20,
        padding: 2,
    },
    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 18,
    },
    selectedTab: {
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedText: {
        color: '#000',
    },
});

export default SegmentedControl;
