// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomNav from '../components/BottomNav';
import useResults from '../hooks/useResults';
import * as Location from 'expo-location';

const MapScreen = () => {
    const [searchApi, results, errMessage, location] = useResults();
    // const [location, setLocation] = useState(null);
    // console.log(location);
    // console.log(results[1].coordinates);
    // const latitude = results[1].coordinates.latitude;
    // const longitude = results[1].coordinates.longitude;

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             Alert.alert('No permission to get location');
    //             return;
    //         }
    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //     })();
    // }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    // latitude: location.coords.latitude,
                    // longitude: location.coords.longitude,
                    latitude: 61.4978,
                    longitude: 23.761,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
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
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
