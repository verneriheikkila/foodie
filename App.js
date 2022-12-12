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
import { firebaseConfig } from './src/api/firebase-config';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account Created!');
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
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <View style={styles.container}>
            <View>
                <Text>Email</Text>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholder="email@email.com"
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholder="password"
                />
            </View>
            <TouchableOpacity onPress={handleSignIn}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
