const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../modules/inventory')

//get all
inventoryRouter.get("/", (req,res,next)=>{
    Inventory.find((err,inventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})
//get one
inventoryRouter.get("/:inventoryID", (req,res,next)=>{
    Inventory.findOne({_id: req.params.inventoryID}, (err,inventory)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})
//post one
inventoryRouter.post("/", (req,res,next)=>{
    const newInventory = new Inventory(req.body)
    newInventory.save((err,savedInventory)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//delete one
inventoryRouter.delete("/:inventoryID", (req,res,next)=>{
    Inventory.findOneAndDelete({_id: req.params.inventoryID}, (err,deletedItem)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.itemName} From Database`)
    })
})
//update one
inventoryRouter.put("/:inventoryID", (req,res,next)=>{
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryID},//find this one to update
        req.body,// update the object with this data
        {new:true},//send back the updated version please
        (err,updatedInventory)=>{
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
        )
})
module.exports = inventoryRouter