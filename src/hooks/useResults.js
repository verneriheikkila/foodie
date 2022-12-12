// @ts-nocheck
import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        searchApi('');
    }, []);

    const searchApi = async (searchTerm) => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('No permission to get location');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    radius: 10_000,
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrMessage('Jotain meni vikaan!');
        }
    };
    return [searchApi, results, errMessage];
};
