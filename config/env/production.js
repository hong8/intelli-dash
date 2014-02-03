'use strict';

module.exports = {
    /*db: "mongodb://localhost/mean",*/
    db: "mongodb://hong8:0033mh@dharma.mongohq.com:10063/hong8DB",
    app: {
        name: "Intelligence Dashboard - Production"
    },
    facebook: {
        clientID: "266754056823515",
        clientSecret: "7609a4344841e2043690c204e49f19fc",
        callbackURL: "http://intelli-dash.herokuapp.com/auth/facebook/callback"
    },
    twitter: {
        clientID: "hdpe2sweuisDYHER643sEQ",
        clientSecret: "9tMhhKIeaTIQDYjjoWFhOHZNbdDYiWoqWN7qI8LIaE",
        callbackURL: "http://intelli-dash.herokuapp.com/auth/twitter/callback"
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