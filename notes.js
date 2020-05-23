const fs =require('fs');
const chalk = require('chalk')

const getNotes = ()=>{
        const notes = loadNotes()
        console.log(chalk.inverse.green("Your notes"))
        notes.forEach(note => {
            console.log(note.title)
        });
    }
const readNote = (title)=>{
    const notes = loadNotes()
    const foundNote = notes.find((note)=>note.title===title)
    if(!foundNote){
        console.log(chalk.red.inverse('Note not found'))
    }
    else{
        console.log(chalk.green.inverse('Title: '), foundNote.title)
        console.log(chalk.green.inverse('Body: '), foundNote.body)
    }
}
const addNote = (title, body)=>{
        const notes = loadNotes()
        const dupilcateNotes = notes.find((note)=>note.title === title)
        debugger
        if(!dupilcateNotes){
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added!'))
        }
        else{
            console.log(chalk.red.inverse('Duplicate note'))
        }
        
    }
const saveNotes = (notes)=>{
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
        console.log('File saved!')
    }
const loadNotes = ()=>{
        try{
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        }
        catch(e){
            return [];
        }
        
    }
const removeNote = (title)=>{
    const notes = loadNotes()
    remainingNotes = notes.filter((note)=>title!==note.title)
    
    if(remainingNotes.length!==notes.length)
        console.log(chalk.green.inverse('Note removed!'))
    else
        console.log(chalk.red.inverse('No note found'))
    saveNotes(remainingNotes)
    
}

module.exports = {
    addNote,
    removeNote,
    getNotes,
    readNote
}

