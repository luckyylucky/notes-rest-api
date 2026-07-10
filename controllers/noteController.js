const Note = require("../models/Note");

const createNote = async (req,res) =>{
    try{
        const {title , description} = req.body;

        const note = new Note ({
            title,
            description
        });

        await note.save();

        res.status(201).json({
    message: "Note Created Successfully",
    note
});

    }catch(error){
        console.log("Error " +error);
        res.status(500).send({
            message : "Internal Server Error"
        });
    }
}

const getNote = async (req,res) => {
    try{
        
        const notes = await Note.find();
        res.status(200).send({
            notes
        });

    }catch(error){
        console.log("Error " + error);
        res.status(500).send({
            message : "Internal Server Error"
        });
    }
}

const updateNote = async (req,res) => {
    try{
        const id = req.params.id;
        const {title,description }= req.body;
        const updatedNote = {
            "title" : title,
            "description" : description
        }
        const findNote = await Note.findByIdAndUpdate(id,updatedNote);
        res.send(updatedNote); 

    }catch(error){
        console.log("Error " + error);
        res.status(500).send({
            message : "Internal Server Error"
        });
    }
}

const deleteNote = async (req,res) => {
    try{
        const id = req.params.id;
        const t = await Note.findByIdAndDelete(id);
        res.send({
            message : "Note Deleted"
        });
    }catch(error){
        console.log("Error " + error);
        res.status(500).send({
            message : "Internal Server Error"
        });
    }
}

module.exports = {
    createNote,
    getNote,
    updateNote,
    deleteNote
}