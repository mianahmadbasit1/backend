const TaskModel = require("../models/taskModels")


module.exports.getTask = async (req,res)=>{
//    for mongodb
    const tasks = await TaskModel.find()
    res.send(tasks);
// check in local host
    // res.send("hi");
}
// for save function

module.exports.saveTask = async (req,res)=>{
    //    for mongodb
        const {task} = req.body
        TaskModel.create({task})
        .then((data)=>{
            console.log("save sucessfully")
            res.status(201).send(data);
       
        }).catch((err)=>{
            console.log(err);
            res.send({error:err, msg: "somthing went wrong"})
        })

    // for update funcation

    


    };
    
    module.exports.updateTask = async (req,res)=>{
        //    for mongodb
        const {id } = req.params
            const {task} = req.body
            
            
            TaskModel.findByIdAndUpdate(id,{task})
            .then(()=> res.send("updated sucessfully"))
            .catch((err)=>{
                console.log(err);
                res.send({error:err, msg: "somthing went wrong"})
            })
    
        }    
        // for delet task
        module.exports.deleteTask = async (req,res)=>{
            //    for mongodb
            const {id } = req.params
            
                
                
                TaskModel.findByIdAndDelete(id)
                .then(()=> res.send("Delete sucessfully"))
                .catch((err)=>{
                    console.log(err);
                    res.send({error:err, msg: "somthing went wrong"})
                })
        
            }    