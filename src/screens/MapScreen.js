// @ts-nocheck
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomNav from '../components/BottomNav';
import useResults from '../hooks/useResults';

const MapScreen = () => {
    const [searchApi, results, errMessage, locationa] = useResults();
    // console.log(locationa.coords.latitude);
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={
                    {
                        // latitude: locationa.coords.latitude,
                        // longitude: locationa.coords.longitude,
                    }
                }
            >
                {results.map((result) => (
                    <Marker
                        key={result.id}
                        coordinate={{
                            latitude: result.coordinates.latitude,
                            longitude: result.coordinates.longitude,
                        }}
                        title={result.name}
                        description={result.description}
                    />
                ))}
            </MapView>
            <BottomNav />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
