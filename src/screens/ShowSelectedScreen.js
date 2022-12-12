// @ts-nocheck
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const ShowSelectedScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult(id);
    }, []);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            />
        </View>
    );
};

export default ShowSelectedScreen;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    },
});
