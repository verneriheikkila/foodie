// @ts-nocheck
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Tähteä, {result.review_count} Arvostelua
            </Text>
            <TouchableOpacity>
                <Feather name="heart" style={{ color: 'red' }} />
            </TouchableOpacity>
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
