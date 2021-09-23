const express =require('express')
// el metodo router lo que hace es crear un objeto para definir rutas
const router = express.Router();

const Task=require('../models/Task');

router.get('/', async (req, res)=>{
    const task = await Task.find();
    //console.log(task);
    res.json(task);
})

router.post('/', async (req, res)=>{
    const task= new Task(req.body);
    await task.save();
    res.json({
            status:'tarea guardada'
    });
});

module.exports=router;