// @ts-nocheck
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.main}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Edulliset"
                    results={filterResultsByPrice('€')}
                />
                <ResultsList
                    title="Keskihintaiset"
                    results={filterResultsByPrice('€€')}
                />
                <ResultsList
                    title="Törsäily tier"
                    results={filterResultsByPrice('€€€')}
                />
                <ResultsList
                    title="Splurge"
                    results={filterResultsByPrice('€€€€')}
                />
            </ScrollView>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: 15,
    },
});
