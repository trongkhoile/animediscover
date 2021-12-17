import {
  push,
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ExlkJcTvZ-sP-IoJCJAl0dYW0re22hY",
  authDomain: "webb-391f1.firebaseapp.com",
  databaseURL: "https://webb-391f1-default-rtdb.firebaseio.com",
  projectId: "webb-391f1",
  storageBucket: "webb-391f1.appspot.com",
  messagingSenderId: "1060616430116",
  appId: "1:1060616430116:web:49ffd07d9bbfd514112eb1",
  measurementId: "G-VJXRLD7ZBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  var newemail = email.replace("@", "");
  var newemail1 = newemail.replace(".", "");
  console.log(newemail1);
  const password = document.getElementById("pass").value;
  const displayName = document.getElementById("name").value;
  if (displayName == "") {
    const html = `<p class="error text-center">You have entered the missing information</p>`;
    $(".error").replaceWith(html);
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // ...
        set(ref(db, "TheStudents/" + newemail1), {
          Name: displayName,
          password: password,
        })
          .then(() => {
            alert("data stored successfully");
          })
          .catch((error) => {
            alert("unsuccessful, error: " + error);
          });
        console.log("created");
        window.location.assign("index.html");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        const html = `<p class="error text-center">Account creation failed . ${errorMessage} </p>`;
        $(".error").replaceWith(html);
      });
  }
});
