// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
// import {
//     StackActions,
//     NavigationActions,
// } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseConfig } from '../api/firebase-config';

const Icon = ({ icon, label }) => (
    <View style={styles.iconContainer}>
        <Feather style={styles.iconStyle} name={icon} />
        <Text style={styles.iconLabel}>{label}</Text>
    </View>
);

const BottomNav = () => {
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: 'Profile' })],
    // });
    // this.props.navigation.dispatch(resetAction);

    const signAndLog = () => {
        signOut(auth);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Icon icon={'map'} label="kartta" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon icon={'search'} label="haku" />
            </TouchableOpacity>
            <TouchableOpacity onPress={signAndLog}>
                <Icon icon={'log-out'} label="ulos" />
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
