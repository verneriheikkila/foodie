// // @ts-ignore
// import * as firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
// import config from './config';

// firebase.initializeApp(config);

// const Firebase = {
//     createUser: (data) =>
//         firebase.firestore().collection('users').doc(`${data}.uid`).set(data),

//     createUserWithEmailAndPassword: ({ email, password }) =>
//         firebase.auth().createUserWithEmailAndPassword(email, password),

//     signInWithEmailAndPassword: ({ email, password }) =>
//         firebase.auth().signInWithEmailAndPassword(email, password),

//     signOut: () => firebase.auth().signOut(),

//     addFav: ({ uId }, placeId) =>
//         firebase
//             .firestore()
//             .collection('users')
//             .doc(uId)
//             .update({
//                 fav: firebase.firestore.FieldValue.arrayUnion(placeId),
//             }),

//     removeFav: ({ uId }, placeId) =>
//         firebase
//             .firestore()
//             .collection('users')
//             .doc(uId)
//             .update({
//                 fav: firebase.firestore.FieldValue.arrayRemove(placeId),
//             }),
// };

// export default Firebase;
