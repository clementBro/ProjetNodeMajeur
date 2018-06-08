
var conf = {
    apiKey: "AIzaSyBENvU1LmW5QK2yBL8cb92n2oxo9EjXNvs",
    authDomain: "barlyon-23ade.firebaseapp.com",
    databaseURL: "https://barlyon-23ade.firebaseio.com",
    projectId: "barlyon-23ade",
    storageBucket: "barlyon-23ade.appspot.com",
    messagingSenderId: "537768779702"
};
firebase.initializeApp(conf);
document.querySelector('#btnLogin').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        var auth = firebase.auth();
        var currentUser = auth.currentUser;
        console.log(currentUser)
        document.location.href="/ticket";
    }).catch(function(err) {
            // Handle errors
    });
});