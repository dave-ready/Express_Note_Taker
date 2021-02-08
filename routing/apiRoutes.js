const path = require ("path")
const fs = require ("fs");
var noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    //read db.json file and return all saved notes as JSON

    app.get("/api/notes", function(req, res) {
       
        res.json(noteData);

    });

    //receive a new note to save on the request body 
    //+ add it to the db.json file, and then return 
    //the new note to the client.

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        let noteID = (noteData.length).toString();
        console.log(noteID);
        newNote.id = noteID;
        noteData.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(noteData), function(err) {
            if (err) throw err;        
        }); 

        res.json(noteData);    

    });

    //Should receive a query parameter containing the id 
    //of a note to delete. This means you'll need to find 
    //a way to give each note a unique id when it's saved. 
    //In order to delete a note, you'll need to read all notes 
    //from the db.json file, remove the note with the given id 
    //property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id", function(req, res) { };

    
}