import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDkUyW09R6EiXeMSn5Rtonuq9cEC5XfGWU",
    authDomain: "grabguide-195023.firebaseapp.com",
    databaseURL: "https://grabguide-195023.firebaseio.com",
    projectId: "grabguide-195023",
    storageBucket: "",
    messagingSenderId: "65815870612"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();