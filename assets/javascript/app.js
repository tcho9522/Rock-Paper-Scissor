var config = {
    apiKey: "AIzaSyBJDTKweVvTv90v0JVuxzb8kcOad-KbHww",
    authDomain: "intro-presence-123.firebaseapp.com",
    databaseURL: "https://intro-presence-123.firebaseio.com",
    projectId: "intro-presence-123",
    storageBucket: "intro-presence-123.appspot.com",
    messagingSenderId: "377126185238"
};

firebase.initializeApp(config);
var database = firebase.database();
database.ref().set({
    number: 2,
})
console.log(database);    
