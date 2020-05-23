const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Your ttitle goes here",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Your body of content",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})
//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Your ttitle goes here",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Your ttitle goes here",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//list
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        notes.getNotes()
    }
})

yargs.parse();
//console.log(yargs.argv);