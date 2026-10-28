const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const createNote = async (req,res) =>{
    try{
        const {title , description} = req.body;

        const note = new Note ({
            title,
            description,
            ownerID : req.user.id
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
        if(req.user.role == "user"){
        const notes = await Note.find({
            ownerID : req.user.id
        });

        if(notes.deletedCount === 0){
            return res.status(404).json({
                message : "Note not found or you don't have permission to view it"
            })
        }

        res.status(200).send({
            notes
        });
    }else{
        const notes = await Note.find();
        return res.status(200).send({
            notes
        });
    }

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
        
        if(req.user.role == "user"){
        const note = await Note.find({
            _id : id,
            ownerID : req.user.id
        });

        if(note.length == 0){
            return res.status(404).json({
                message : "Note not found or you don't have permission to update it"
            })
        }

        const updatedNote = {
            "title" : title,
            "description" : description
        }
        const findNote = await Note.findByIdAndUpdate(id,updatedNote);
        res.send(updatedNote); 
    }else{
        const updatedNote = {
            "title" : title,
            "description" : description
        }
        const findNote = await Note.findByIdAndUpdate(id,updatedNote);
        res.send(updatedNote);
    }

    }catch(error){
        console.log("Error " + error);
        res.status(500).send({
            message : "Internal Server Error"
        });
    }
}

const deleteNote = async (req,res) => {
    try{
        const id = req.params.id;               //noteID 
        if(req.user.role == "user"){
        const result = await Note.deleteOne({
            _id : id,
            ownerID : req.user.id
        });

        if(result.deletedCount === 0){
            return res.status(403).json({
                message : "Access Denied"
            })
        }

        return res.status(200).json({
            messsage : "Note Deleted Successfully"
        });
    }else{

        const result = await Note.deleteOne({
            _id : id,
        });

         return res.status(200).json({
            messsage : "Note Deleted Successfully"
        });

    }

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