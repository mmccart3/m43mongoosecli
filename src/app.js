require ('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose'); //node --trace-deprecation ...
const {createMovie} = require('./movies/function');


async function app(yargsinput) {
    if (yargsinput.create) {
        // put code here for create
        await createMovie({title: yargsinput.title, actor: yargsinput.actor, director: yargsinput.director, rating: yargsinput.rating});
    } else if (yargsinput.read) {
        // code for list all movies
    } else if (yargsinput.update) {
        //code here for updating actor
    } else if (yargsinput.delete) {
        //code for deleting a movie
    } else {
        console.log("Unrecognised option")
    }
    await mongoose.disconnect(); //node --trace-deprecation ...
}

app(yargs.argv);