'use strict';

module.exports = {
    /*db: "mongodb://localhost/intelli-dash-test",*/
    db: "mongodb://hong8:0033mh@troup.mongohq.com:10009/intelli-dash-test",
    port: 3001,
    app: {
        name: "Intelligence Dashboard - Test"
    },
    facebook: {
        clientID: "266754056823515",
        clientSecret: "7609a4344841e2043690c204e49f19fc",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "hdpe2sweuisDYHER643sEQ",
        clientSecret: "9tMhhKIeaTIQDYjjoWFhOHZNbdDYiWoqWN7qI8LIaE",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}