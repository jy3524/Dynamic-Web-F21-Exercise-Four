const express = require('express');
// Initiate Express
const app = express();
// Setting port - dynamically with Heroku
const port = process.env.PORT || 4000;

// Import Firebase
const firebase = require('firebase/app');
// Get configuration object so we can communicate with Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxpEEi5dzYixGpDJ5EJZnSWaabC3kpIWc",
  authDomain: "exercise-four-f21-jeongin.firebaseapp.com",
  projectId: "exercise-four-f21-jeongin",
  storageBucket: "exercise-four-f21-jeongin.appspot.com",
  messagingSenderId: "736248090673",
  appId: "1:736248090673:web:e43456b05ce8c648d1c510"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes for directing user to correct place
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');
// Tell express to use routes...
app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/create', createArticleRoute);
// Listen for requests on the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});