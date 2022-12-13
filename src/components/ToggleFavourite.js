// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/storage';

const ToggleFavorite = ({ restaurantId }) => {
    const database = firebase.database();

    const Favorites = ({ restaurantId }) => {
        const [isFavorited, setIsFavorited] = useState(false);

        useEffect(() => {
            database
                .ref('favorites/restaurantId')
                .once('value')
                .then((snapshot) => {
                    setIsFavorited(snapshot.exists());
                });
        }, []);

        const toggleFavorite = () => {
            database
                .ref(`favorites/${restaurantId}`)
                .set(isFavorited ? null : true);
            setIsFavorited(!isFavorited);
        };
    };

    return (
        <TouchableOpacity onPress={toggleFavorite}>
            <View>
                <Text>
                    {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ToggleFavorite;
