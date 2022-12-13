// @ts-nocheck
import React, { useState } from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from 'react-native';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert.alert('Account succesfully created. Proceed to login.');
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(error.message);
            });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed in!');
                navigation.navigate('Search');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.input}
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleCreateAccount}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        padding: 8,
    },
    button: {
        height: 40,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0066CC',
        marginTop: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
