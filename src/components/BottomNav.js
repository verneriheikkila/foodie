// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Icon = ({ icon, label }) => (
    <View style={styles.iconContainer}>
        <Feather style={styles.iconStyle} name={icon} />
        <Text style={styles.iconLabel}>{label}</Text>
    </View>
);

const BottomNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Icon icon={'map'} label="map" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon icon={'search'} label="search" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Icon icon={'user'} label="profile" />
            </TouchableOpacity>
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 16,
        marginLeft: 16,
    },
    iconStyle: {
        fontSize: 35,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconLabel: {
        color: 'darkgray',
        fontWeight: 'bold',
    },
});
