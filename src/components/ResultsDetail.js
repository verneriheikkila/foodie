// @ts-nocheck
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../api/firebase-config';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firestore = firebase.firestore();

const ResultsDetail = ({ result }) => {
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    // const user = auth().currentUser;
    // const uid = user.uid;

    // const userFavouritesRef = firestore
    //     .collection('users')
    //     .doc(uid)
    //     .collection('favourites');
    // const collectionReference = firestore().collection('favourites');

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Tähteä, {result.review_count} Arvostelua
            </Text>
            {/* <TouchableOpacity
                onPress={() =>
                    collectionReference.add({
                        id: result.id,
                        name: result.name,
                        image_url: result.image_url,
                        review_count: result.review_count,
                        rating: result.rating,
                    })
                }
            >
                <Feather name="heart" style={{ color: 'red' }} />
            </TouchableOpacity> */}
        </View>
    );
};

export default ResultsDetail;

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15,
    },
});
