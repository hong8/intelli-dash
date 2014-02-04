'use strict';

module.exports = {
    db: "mongodb://localhost/intelli-dash-dev",
    /*db: "mongodb://hong8:0033mh@troup.mongohq.com:10008/intelli-dash-dev",*/
    app: {
        name: "Intelligence Dashboard - Development"
    },
    facebook: {
        clientID: "266754056823515",
        clientSecret: "7609a4344841e2043690c204e49f19fc",
        callbackURL: "http://192.168.179.100:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "hdpe2sweuisDYHER643sEQ",
        clientSecret: "9tMhhKIeaTIQDYjjoWFhOHZNbdDYiWoqWN7qI8LIaE",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "b8af4b8b0ab364b1984d",
        clientSecret: "b7e7ea13c14e4ceeb04e69425fbbf56b9cd57783",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "114439128189-vpqtnncflvp0rbri67nhfoqujk60mnoq.apps.googleusercontent.com",
        clientSecret: "-upPvzTWzhqiI3RdGK_2zz2R",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}