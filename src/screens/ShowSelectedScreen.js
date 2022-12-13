// @ts-nocheck
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import ToggleFavorite from '../components/ToggleFavourite';

const ShowSelectedScreen = ({ route }) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult(id);
    }, []);

    const id = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    if (!result) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            />
            <ToggleFavorite id={id} />
        </View>
    );
};

export default ShowSelectedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 27,
        fontWeight: 'bold',
    },
});
